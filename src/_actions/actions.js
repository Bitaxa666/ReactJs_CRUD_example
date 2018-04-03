/**
 * Created by user on 3/30/18.
 */
import {SET_GAMES, GAME_FETCHED, ADD_SONG, GAME_UPDATED, GAME_DELETED } from '../_constants';

function handleResponse(response) {
    if (response.status === 200) {
        return response.json();
    }else if (response.status === 204) {
        return response.statusText;
    }
    else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

export function setGames(games) {
    return {
        type: SET_GAMES,
        games
    }
}

export function addGame(game) {
    return {
        type: ADD_SONG,
        game
    }
}
export function gameFetched(game) {
    return {
        type: GAME_FETCHED,
        game
    }
}


export function gameUpdated(game) {
    return {
        type: GAME_UPDATED,
        game
    }
}
export function gameDeleted(gameId) {
    return {
        type: GAME_DELETED,
        gameId
    }
}

export function saveSong(data){
    return dispatch => {
        return fetch('/api/games',{
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(handleResponse)
            .then(data =>dispatch(addGame(data.game)));
    }
}

export function updateGame(data){
    return dispatch => {
        return fetch(`/api/games/${data._id}`,{
            method: 'put',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(handleResponse)
            .then(data =>dispatch(gameUpdated(data.game)));
    }
}

export function deleteGame(id){
    return dispatch => {
        return fetch(`/api/games/${id}`,{
            method: 'delete',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(handleResponse)
            .then(data =>dispatch(gameDeleted(id)));
    }
}

export function fetchGames() {
    return dispatch => {
        fetch('/api/games')
            .then(res => res.json())
            .then(data => dispatch(setGames(data.games)));
    }
}
export function fetchGame(id) {
    return dispatch => {
         fetch(`/api/games/${id}`)
             .then(res => res.json())
             .then(data => dispatch(gameFetched(data.game))); /*зачем они делают в конце gameFetched??*/
    }
}

