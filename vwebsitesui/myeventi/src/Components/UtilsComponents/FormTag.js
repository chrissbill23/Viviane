import { Component } from 'react';
class FormTag extends Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.value};
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(event) {
        this.setState({value: event.target.value});
        this.props.handleChange(this.props.name, event.target.value);
    }
}
export default FormTag;