import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
    constructor(props) {
        super(props);
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
            <span>
            {this.check('HOME', '/')}
            {this.check('TIPI', '/event/types')}
            {this.check('CATEGORIE', '/event/categs')}
            {this.check('FAQ', '/about')}
            {this.check('SIGN IN', '/user/signin')}
            </span>
        );
    }
    check(text, link) {
            if(link ===window.location.pathname) {
                return <span id="current">{text}</span>
            }
        return <Link to={link}>{text}</Link>
    }
}

export default Header;