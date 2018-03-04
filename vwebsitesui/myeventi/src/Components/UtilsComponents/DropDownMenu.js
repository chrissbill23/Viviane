import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Dropdown from "react-simple-dropdown/lib/components/Dropdown";
import DropdownTrigger from "react-simple-dropdown/lib/components/DropdownTrigger";
import DropdownContent from "react-simple-dropdown/lib/components/DropdownContent";
class DropDownMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {listLinks: this.props.listLinks};
    }

    render() {
        return (
            <div >
            </div>
        );
    }
    listLinks() {
        var list = [];
        for(const value of this.state.listLinks) {
            list.push(<li>{value}</li>);
        }
        return (
                <ul id="optionsSettings">
                    {list}
                </ul>
        );
    }
}
export default DropDownMenu;