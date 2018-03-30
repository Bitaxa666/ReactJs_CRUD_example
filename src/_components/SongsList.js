/**
 * Created by user on 3/30/18.
 */
import React from 'react';
import PropTypes from 'prop-types';

export default function SongsList({games}) {
    const emptyMessage = (
        <p>There are no games yet in your collection.</p>
    );
    const gameList = (
      <p>song List contains some items</p>
    );
    return(
      <div>
          {games.length === 0 ? emptyMessage : gameList}
      </div>
    );
}

SongsList.propTypes = {
    games: PropTypes.array.isRequired,
}