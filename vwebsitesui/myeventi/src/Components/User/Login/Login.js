import React from 'react';
import {InputPassword, InputText} from "../../UtilsComponents/Input";
import FormComponent from "../../UtilsComponents/FormComponent";
const sideBgLog = {
    backgroundImage: "url('/images/conc2.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    top: '0',
    right: '0',
    left: '0',
    bottom: '0',
}
export class Login extends FormComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    render() {
        return (
            <div>
                <div style={sideBgLog}>
                    <form id="formLogin" onSubmit={this.handleSubmit}>
                        <h1>Accedi</h1>
                        <InputText name='username' value = {this.state.username} label = 'Nickname or Email'
                               handleChange = {this.handleChange}/>
                        <InputPassword name='password' value = {this.state.password} label = 'Password'
                               handleChange = {this.handleChange}/>
                        <input type="submit" value="Accedi" />
                        <p>Oppure accedi con</p>
                        <div id="socialLogin">
                            <a href="#" className="fa fa-facebook"></a>
                            <a href="#" className="fa fa-google"></a>
                            <a href="#" className="fa fa-snapchat-ghost"></a>
                        </div>
                        <p>Non sei ancora iscritto? <a href="/user/signup">Iscriviti</a></p>
                    </form>
                </div>
            </div>
        );
    }
    handleIt() {
        this.controller.login(this.state).then(() => {
            this.props.history.push('/user/home');
        }, err => {
            if (err !== '') {
                alert(err);
            } else {
                alert('errore interno');
            }
        });
    }
}
export default Login;