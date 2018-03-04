import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './Components/App/App';
export default function homePage() {
    ReactDOM.render((
        <BrowserRouter>
            <App />
        </BrowserRouter>
    ), document.getElementById('root'));
}
homePage();