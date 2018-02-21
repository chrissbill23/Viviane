import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {userController} from "../../../Controllers/UsersControllers";
class NavHomeUser extends Component {
    constructor(props){
        super(props);
        this.controller = userController;
    }
    render() {
        return (
                <nav id="navUSer">
                    {this.currentState()}
                </nav>
        );
    }
    currentState() {
        return (
            <div>
                <div id="myprofile">
                    <img src="/images/profileicon.png" alt="la tua foto profilo"/>
                    <p>{this.controller.giveUserName()} {this.controller.giveUserSurname()}</p>
                </div>
            <ul>
            {this.check('Notizie', '/user/home')}
                {this.check('Agenda', '/user/home/agenda')}
                {this.check('Social', '/user/home/social')}
                {this.check('Pubblicazioni', '/user/home/published')}
                {this.check('Pubblica un nuovo annuncio', '/user/home/newevent')}
            </ul>
            </div>
        );
    }
    check(text, link) {
        if(link === window.location.pathname) {
            return <li id="currentNavUser"><span>{text}</span></li>;
        }
        return <li><Link to={link}>{text}</Link></li>;
    }
}

export default NavHomeUser;