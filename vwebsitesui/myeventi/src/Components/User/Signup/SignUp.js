import React from 'react';
import {userController} from "../../../Controllers/UsersControllers";
import './signupstyle.css';
import FormComponent from "../../UtilsComponents/FormComponent";
import {InputPassword, InputText} from "../../UtilsComponents/Input";

export class SignUp extends FormComponent {
    constructor(props) {
        super(props);
        this.state = {
            currentFieldset: <div>Caricamento in corso...</div>,
            currentList: (<ol>
                <li onClick={(e) => this.checkAndNext(0, e)} id = "currentStep" className="fs-title">Informazioni account</li>
                <li onClick={(e) => this.checkAndNext(1, e)} className="fs-title">Social Profiles</li>
                <li onClick={(e) => this.checkAndNext(2, e)} className="fs-title">Personal Details</li>
            </ol>),
            nickname: '',
            email: '',
            password: '',
            password2: '',
            name: '',
            surname: '',
            twitter: '',
            facebook: '',
            gplus: '',
        }
    }
    render() {
        return (
            <div id="singupFormContainer">
            <form id="signupform" onSubmit={this.handleSubmit}>
                {this.state.currentList}
                {this.state.currentFieldset}
            </form>
            </div>
        );
    }
    checkAndNext(index, e) {
        if(e !== undefined)
            e.preventDefault();
        var f;
        var l;
        switch (index) {
            case 1 : f = (
                <fieldset>
                    <h2>Social Profiles</h2>
                    <h3 className="fs-subtitle">Passo 2 su 3</h3>
                    <InputText key={7} name='twitter' value = {this.state.twitter} label = 'Twitter'
                               handleChange = {this.handleChange}/>
                    <InputText key={8} name='facebook' value = {this.state.facebook} label = 'Facebook'
                               handleChange = {this.handleChange}/>
                    <InputText key={9} name='gplus' value = {this.state.gplus} label = 'Google plus'
                               handleChange = {this.handleChange}/>
                    <button type='button' name="previous" onClick={(e) => this.checkAndNext(0, e)}>Previous</button>
                    <button type="button" name="next" onClick={(e) => this.checkAndNext(2, e)}>Next</button>
                </fieldset>
            );
            l = (
                <ol>
                <li className="completed fs-title" onClick={(e) => this.checkAndNext(0, e)}>Informazioni account</li>
                <li id="currentStep" className="fs-title" onClick={(e) => this.checkAndNext(1, e)}>Social Profiles</li>
                <li className="fs-title" onClick={(e) => this.checkAndNext(2)}>Personal Details</li>
                </ol>);
            break;
            case 2 : f = (
                <fieldset>
                    <h2>Personal Details</h2>
                    <h3 className="fs-subtitle">Passo 3 su 3</h3>
                    <InputText key={4} name='name' value = {this.state.name} label = 'First Name'
                               handleChange = {this.handleChange}/>
                    <InputText key={5} name='surname' value = {this.state.surname} label = 'Last Name'
                               handleChange = {this.handleChange}/>
                    <textarea key={6} name="address" placeholder="Address"></textarea>
                    <button type='button' name="previous" onClick={(index) => this.checkAndNext(1)}>Previous</button>
                    <button type="submit" name="submit" value="Submit">Iscriviti</button>
                </fieldset>
            );
            l = (
                <ol>
                    <li onClick={(e) => this.checkAndNext(0, e)} className="completed fs-title">Informazioni account</li>
                    <li onClick={(e) => this.checkAndNext(1, e)} className="completed fs-title">Social Profiles</li>
                    <li onClick={(e) => this.checkAndNext(2, e)} id="currentStep" className="fs-title">Personal Details</li>
                </ol>);
            break;
            default : f = (
                <fieldset>
                    <h2>Informazioni account</h2>
                    <h3 className="fs-subtitle">Passo 1 su 3</h3>
                    <InputText key={0} name='nickname' value = {this.state.nickname} label = 'Inserisci un nome utente'
                               handleChange = {this.handleChange}/>
                    <InputText key={1} name='email' value = {this.state.email} label = 'Inserisci la tua email'
                               handleChange = {this.handleChange}/>
                    <InputPassword key={2} name='password' value = {this.state.password} label = 'Inserisci una password'
                               handleChange = {this.handleChange}/>
                    <InputPassword key={3} name='password2' value = {this.state.password2} label = 'Reinserisci la password'
                                   handleChange = {this.handleChange}/>
                    <button type='button' name="next" onClick={(e) => this.checkAndNext(1, e)}>Next</button>
                </fieldset>
            );
             l = (<ol>
                    <li onClick={(e) => this.checkAndNext(0, e)} id="currentStep" className="fs-title">Informazioni account</li>
                     <li onClick={(e) => this.checkAndNext(1, e)} className="fs-title">Social Profiles</li>
                     <li onClick={(e) => this.checkAndNext(2, e)} className="fs-title">Personal Details</li>
             </ol>);

        }
        this.setState({currentFieldset: f, currentList: l});
    }
    componentDidMount() {
        this.checkAndNext(0);
    }
    /*
    handleChange(name, value) {
        this.setState({[name]: value});
    }*/
    handleIt() {
        var data = {};
        for(const key in this.state){
            if(key !== 'currentField' && key !== 'currentList') {
                if(key !== 'twitter' && key !== 'facebook' &&
                    key !== 'gplus' && this.state[key] === '') {
                    alert(key+ ' must be filled')
                    return false;
                }
                data[key] = this.state[key];
            }
        }
        this.controller.signup(data).then((data)=>{
            console.log(data);
        }, err => console.log(err));
    }
}
export default SignUp;