import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import News from "./News/News";
import Agenda from "./Agenda/Agenda";
import Social from "./Social/Social";
import Published from "./Published/Published";
class BodyHome extends Component {
    render() {
        return (
            <div id="bodyHomeUser">
                <Switch>
                    <Route exact path='/user/home' component={News}/>
                    <Route exact path='/user/home/agenda' component={Agenda}/>
                    <Route exact path='/user/home/social' component={Social}/>
                    <Route exact path='/user/home/published' component={Published}/>
                </Switch>
            </div>
        );
    }
}
export default BodyHome;