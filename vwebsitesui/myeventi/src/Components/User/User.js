import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from "./Login/Login";
class User extends Component {
    render() {
        return (
                <Switch>
                    <Route exact path='/user/signin' component={Login}/>
                </Switch>
        );
    }
}
export default User;