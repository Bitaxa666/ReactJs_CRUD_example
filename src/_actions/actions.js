/**
 * Created by user on 3/30/18.
 */
import {SET_GAMES} from '../_constants';

export function setGames(games) {
    return {
        type: SET_GAMES,
        games
    }
}

export function fetchGames() {
    return dispatch => {
        fetch('/api/games')
            .then(res => res.json())
            .then(data => dispatch(setGames(data.games)));
    }

}