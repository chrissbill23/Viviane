import React from 'react';
import FormTag from "./FormTag";
class InputText extends FormTag {
    render() {
        return (
            <label>
                <span className="hidden">{this.props.label}</span>
                <br/>
            <input
                name={this.props.name}
                type='text'
                value={this.state.value}
                placeholder={this.props.label}
                onChange={this.handleInput} />

            </label>
        );
    }
}
class InputPassword extends FormTag {
    render() {
        return (
            <label>
                <span className="hidden">{this.props.label}</span>
                <br/>
                <input
                    name={this.props.name}
                    type='password'
                    value={this.state.value}
                    autoComplete="current-password"
                    placeholder={this.props.label}
                    onChange={this.handleInput} />

            </label>
        );
    }
}
export {InputText, InputPassword};