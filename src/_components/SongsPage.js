/**
 * Created by user on 3/30/18.
 */
import React from 'react';
import { connect } from 'react-redux';
import SongsList from './SongsList';
import PropTypes from 'prop-types';
import { fetchGames, deleteGame } from '../_actions/actions';

class SongsPage extends React.Component {

    componentDidMount(){
        this.props.fetchGames();
    }

    render(){
        return(
          <div>
              <h1>Games List</h1>
              <SongsList games={this.props.games} deleteGame={this.props.deleteGame} />
          </div>
        );
    }
}
SongsPage.propTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired,
    deleteGame: PropTypes.func.isRequired
}
function mapStateToProps(state) {
    return{
        games:state.games,
    }
}
export default connect(mapStateToProps, {fetchGames, deleteGame})(SongsPage);