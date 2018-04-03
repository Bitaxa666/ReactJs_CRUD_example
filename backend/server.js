/**
 * Created by user on 3/30/18.
 */
import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
const dbUrl = 'mongodb://localhost/';

function validate(data){
    let errors = {};
    if(data.title === '') errors.title = "Can't be empty";
    if(data.cover === '') errors.cover = "Can't be empty";
    const isValid = Object.keys(errors).length === 0;
    return {errors, isValid};
}

mongodb.MongoClient.connect(dbUrl, function(err, db){

    var dbo = db.db('crudwithredux');
    app.get('/api/games', (req, res) =>{
        dbo.collection('games').find({}).toArray((err,games) =>{
           res.json({games});
        });
    });
    app.post('/api/games', (req, res) =>{
        const {errors, isValid} = validate(req.body);
        if(isValid){
            const { title, cover } = req.body;
            console.log(req.body);
            dbo.collection('games').insertOne({ title, cover}, (err, result) =>{
                if(err){
                    res.status(500).json({errors: {global: "Something went wrong"}});
                }else{
                    res.json({game: result.ops[0]});
                }
            });
        }else {
            res.status(400).json({errors});
        }
    });

    app.put('/api/games/:_id', (req, res) => {
        const {errors, isValid} = validate(req.body);
        if(isValid){
            const { title, cover } = req.body;
            dbo.collection('games').findOneAndUpdate(
                {_id: new mongodb.ObjectId(req.params._id)},
                { $set: { title, cover}},
                { returnOriginal: false},
                (err, result) => {
                    if (err) { res.status(500).json({ errors: {global: err}}); return; }

                    res.json({game: result.value});
                }
            );
        }else {
            res.status(400).json({errors});
        }
    });

    app.get('/api/games/:_id', (req, res) => {
       dbo.collection('games').findOne({ _id: new mongodb.ObjectId(req.params._id) }, (err, game) => {
           res.json({ game });
       })
    });

    app.delete('/api/games/:_id', (req, res) => {
        dbo.collection('games').deleteOne({ _id: new mongodb.ObjectId(req.params._id) }, (err) => {
            if (err) { res.status(500).json({ errors: {global: err}}); return; }

            res.status(204).json({});
        })
    });

    app.use((req,res) => {
        res.status(404).json({
            errors:{
                global: "Still working on it. Please try again latter...."
            }
        });
    });
    app.listen(8011, () => console.log('Server is running on localhost: 8011'));
});
