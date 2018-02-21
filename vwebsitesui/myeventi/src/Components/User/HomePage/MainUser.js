import React, { Component } from 'react';
import NavHomeUser from "./NavHomeUser";
import BodyHome from "./BodyHome/BodyHome";
class MainUser extends Component {
    render() {
        return (
            <div>
                <NavHomeUser/>
                <BodyHome/>
            </div>
        );
    }
}
export default MainUser;