import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "../Home/Home";
import Event from "../Events/Event";
import User from "../User/User";
class Main extends Component {
    render() {
        return (
            <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/event' component={Event}/>
                <Route path='/user' component={User}/>
            </Switch>
            </main>
        );
    }
}
export default Main;