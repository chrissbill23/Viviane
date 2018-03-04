import React, { Component } from 'react';
import DropDownMenu from '../UtilsComponents/DropDownMenu';
const styleSettings = {
    backgroundImage: "url('/images/settings.png')",
}
export class Home extends Component {
    render() {
        var listLink = [<a href="#">Op1</a>, <a href="#">Op2</a>, <a href="#">Op3</a>];
        return (
            <div>
                <h1>Home</h1>
                <div id="userOptions">
                    <DropDownMenu listLinks = {listLink} style = {styleSettings} text = {<span className="hidden">Impostazioni account</span>}/>
                </div>
            </div>
        );
    }
}
export default Home;