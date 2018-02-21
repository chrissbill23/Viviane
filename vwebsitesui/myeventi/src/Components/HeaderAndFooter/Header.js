import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {userController} from "../../Controllers/UsersControllers";
const styleMessaggi = {
    backgroundImage: "url('/images/message.png')",
}
const styleHome = {
    backgroundImage: "url('/images/home.png')",
}
const styleNotification = {
    backgroundImage: "url('/images/notification.png')",
}
const styleSettings = {
    backgroundImage: "url('/images/settings.png')",
}
class Header extends Component {
    constructor(props) {
        super(props);
        this.controller = userController;
    }
    render() {
        return (
            <header id = "header">
                <div id="logoSite">
                    <img src="/images/myeventilogo.png" alt="logo di My Eventi: Scopri e pubblica annunci di eventi nella tua citt&agrave;"/>
                </div>
                <nav>
                    {this.currentState()}
                    <form id="searchForm">
                        <input type="text" placeholder="Search"/>
                        <button id="searchFormButton" type="submit">
                            <span className="hidden">Search</span>
                        </button>
                    </form>
                </nav>
            </header>
        );
    }
    currentState() {
        return (
            <div>
                <div>
            {this.check('HOME', '/')}
            {this.check('TIPI', '/event/types')}
            {this.check('CATEGORIE', '/event/categs')}
                    {this.check('LOCALI', '/event/places')}
            {this.check('FAQ', '/about')}
                </div>
                { this.controller.isUserConnected() === false ? this.check('SIGN IN', '/user/signin') :
                    this.dropMenuHomeUser(this.controller.giveUsername(), '/user/home')}
            </div>
        );
    }
    check(text, link, exactmatch = true, styl = null) {
        var check = exactmatch && link === window.location.pathname;
        check = check || (!check && !exactmatch && window.location.pathname.indexOf(link) !== -1);
            if(check) {
                return !styl ? <span id="current">{text}</span> :
                    <span style={styl} id="current">{text}</span>;
            }
        return !styl ? <Link to={link}>{text}</Link> : <Link style = {styl} to={link}>{text}</Link>;
    }
    dropMenuHomeUser(text, link) {
        return (
            <div id="userOptions">
                {this.check(<span className="hidden">Spazio personale</span>, "/user/home", false, styleHome)}
                {this.check(<span className="hidden">Notifiche</span>,  "/user/notification", true, styleNotification)}
                {this.check(<span className="hidden">Messaggi</span>,  "/user/mails", true, styleMessaggi)}
                {this.check(<span className="hidden">Impostazioni account</span>,  "/user/accountsettings", true, styleSettings)}
            </div>
        );
    }
}

export default Header;