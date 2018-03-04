import { Component } from 'react';
import {userController} from "../../Controllers/UsersControllers";
export class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.controller = userController;
    }
    handleChange(name, value) {
        this.setState({[name]: value});
    }
    handleSubmit(event) {
        this.handleIt();
        event.preventDefault();
    }
    handleIt() {

    }
}
export default FormComponent;