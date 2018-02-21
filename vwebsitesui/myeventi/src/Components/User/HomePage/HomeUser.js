import React, { Component } from 'react';
import Header from "../../HeaderAndFooter/Header";
import Footer from "../../HeaderAndFooter/Footer";
import Main from "../../Main/Main";
class HomeUser extends Component {
    render() {
        return (
            <div id="root">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}
export default HomeUser;