/**
 * Created by user on 3/30/18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import SongCard from './SongCard';

export default function SongsList({ games, deleteGame}) {
    const emptyMessage = (
        <p>There are no games yet in your collection.</p>
    );
    const gameList = (
        <div className="ui container">
          <div className="ui three cards">
              {games.map(game => <SongCard game={game} key={game._id} deleteGame={deleteGame} />)}
          </div>
        </div>
    );
    return(
      <div>
          {games.length === 0 ? emptyMessage : gameList}
      </div>
    );
}

SongsList.propTypes = {
    games: PropTypes.array.isRequired,
    deleteGame: PropTypes.func.isRequired
}