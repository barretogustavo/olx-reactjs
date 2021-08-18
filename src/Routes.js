import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

export default ()=>{
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/signin">
                <Signin />
            </Route>
            <Route exact path="/signup">
                <Signup />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}