import React, { Component } from 'react';
import '../../my_eventi.css';
class Header extends Component {
    render() {
        return (
            <div>
            <header id = "header">
                <div>
                <h1>My Eventi</h1>
                <p><strong>Scopri e pubblica annunci di eventi nella tua citt&agrave;</strong></p>
                </div>
            </header>
            <nav className="navbar">
                <div className="sidemenu">
            <a href="" lang="en">Home</a>
            <a href="">Tipi</a>
            <a href="">Categorie</a>
                </div>
                <form id="searchForm">
                        <input type="text" placeholder="Search"/>
                        <button type="submit">Search</button>
                </form>

                <div className="sidemenu">
            <a href="">FAQ</a>
            <a href="">Sign in</a>
                </div>
            </nav>
            </div>
        );
    }
}

export default Header;