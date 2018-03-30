/**
 * Created by user on 3/30/18.
 */
import {SET_GAMES} from '../_constants';

export default function games(state = [], action = {}) {
    switch(action.type) {
        case SET_GAMES:
            return action.games;
        default: return state;
    }
}