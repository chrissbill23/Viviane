import React from 'react';
import FormTag from "./FormTag";
class InputText extends FormTag {
    render() {
        return (
            <label>
                <span>{this.props.label}</span>
                <br/>
            <input
                name={this.props.name}
                type='text'
                value={this.state.value}
                onChange={this.handleInput} />

            </label>
        );
    }
}
class InputPassword extends FormTag {
    render() {
        return (
            <label>
                <span>{this.props.label}</span>
                <br/>
                <input
                    name={this.props.name}
                    type='password'
                    value={this.state.value}
                    autoComplete="current-password"
                    onChange={this.handleInput} />

            </label>
        );
    }
}
export {InputText, InputPassword};