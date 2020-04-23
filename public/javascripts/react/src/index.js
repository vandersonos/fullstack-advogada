import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ComponenteDePagina404 from './ComponenteDePagina404.js';
import CalculadoraPensao from './compontentes/calc-pensao/CalculadoraPensao.js';
import FeedPaginaFacebook from './compontentes/pagina_facebook/FeedPaginaFacebook.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/calculadora-pensao-alimenticia" component={CalculadoraPensao} />
            <Route path="/feed-pagina-facebook" component={FeedPaginaFacebook} />
            <Route path='*' component={ComponenteDePagina404} />
        </Switch>
    </ BrowserRouter>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
