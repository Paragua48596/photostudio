//Importamos modulos
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Componentes
import Menu from './components/Menu';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>

                {/* Menu de navegacion */}
                <Menu />

                <Switch>
                    <Route exact path='/' render={() => (
                        <h1>Test</h1>
                    )} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router