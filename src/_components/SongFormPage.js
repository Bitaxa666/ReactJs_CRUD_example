/**
 * Created by user on 4/3/18.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { saveSong, fetchGame, updateGame } from '../_actions/actions';
import SongForm from './SongForm';



class SongFormPage extends React.Component {

    state = {
        redirect: false,
    };

    componentDidMount = () => {
        if (this.props.match.params._id){
            this.props.fetchGame(this.props.match.params._id);
        }
    };

    saveGame = ({_id, title, cover}) => {
        if(_id){
            console.log(_id, title, cover);
            return this.props.updateGame({_id, title, cover}).then(
                ()=>{this.setState({redirect:true})},
            );
        } else {
            return this.props.saveSong({ title, cover }).then(
                ()=>{this.setState({redirect:true})},
            );
        }
    };

    render(){
    return (
        <div>
            {
                this.state.redirect ?
                    <Redirect to="/songs" /> :
                    <SongForm
                        game={this.props.game}
                        saveGame={this.saveGame}
                    />
            }
        </div>
    );
    }
}
function mapStateToProps(state, props) {

    if(props.match.params._id){
        return{
            game: state.games.find(item => item._id === props.match.params._id),
        }
    }

    return {game: null};
}

export default connect(mapStateToProps, {saveSong, fetchGame, updateGame})(SongFormPage);