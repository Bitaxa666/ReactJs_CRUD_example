/**
 * Created by user on 3/30/18.
 */
import React from 'react';

import {Route, Switch} from "react-router-dom";
import SongsPage from '../_components/SongsPage';
import HomePage from '../_components/HomePage';
import PlayerPage from '../_components/PlayerPage';
import SongFormPage from '../_components/SongFormPage';

export default function Main() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/songs" component={SongsPage}/>
            <Route path="/player" component={PlayerPage}/>
            <Route path="/songs/new" component={SongFormPage}/>
            <Route path="/game/:_id" component={SongFormPage} />
        </Switch>
    );


};
