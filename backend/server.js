/**
 * Created by user on 3/30/18.
 */
import express from 'express';
import mongodb from 'mongodb';

const app = express();
const dbUrl = 'mongodb://localhost/';

mongodb.MongoClient.connect(dbUrl, function(err, db){

    var dbo = db.db('crudwithredux');
    app.get('/api/games', (req, res) =>{
        dbo.collection('games').find({}).toArray((err,games) =>{
           res.json({games});
        });
    });
    app.listen(8011, () => console.log('Server is running on localhost: 8011'));
});
