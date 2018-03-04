import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from "./Login/Login";
import MainUser from "./HomePage/MainUser";
import SignUp from "./Signup/SignUp";
class User extends Component {
    render() {
        return (
                <Switch>
                    <Route exact path='/user/signin' component={Login}/>
                    <Route exact path='/user/signup' component={SignUp}/>
                    <Route path='/user/home' component={MainUser}/>
                </Switch>
        );
    }
}
export default User;