import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Type from "./TypeOfEvent/Type";
export class Event extends Component {
    render() {
        return (
            <div>
            <Switch>
                <Route exact path='/event/types' component={Type}/>
            </Switch>
            </div>);
    }
}
export default Event;