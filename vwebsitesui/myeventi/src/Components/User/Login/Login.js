import React, { Component } from 'react';
import {InputPassword, InputText} from "../../UtilsComponents/Input";
import {userController} from "../../../Controllers/UsersControllers";
import 'whatwg-fetch';
export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.controller = userController;
    }
    render() {
        return (
            <div id="formLogin">
                <h1>Accedi</h1>
                <form onSubmit={this.handleSubmit}>
                    <InputText name='username' value = {this.state.username} label = 'Nickname or Email'
                               handleChange = {this.handleChange}/>
                    <InputPassword name='password' value = {this.state.password} label = 'Password'
                               handleChange = {this.handleChange}/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
    handleChange(name, value) {
        this.setState({[name]: value});
    }
    handleSubmit(event) {
        this.controller.login(this.state).then(() => {
            alert('Cool');
        }, err => {
            if (err != '') {
                alert(err);
            } else {
                alert('errore interno');
            }
        });
        event.preventDefault();
    }
}
export default Login;