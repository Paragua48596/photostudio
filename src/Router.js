//Importamos modulos
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Componentes
import Menu from './components/Menu';
import Footer from './components/Footer';

//Paginas
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>

                {/* Menu de navegacion */}
                <Menu />
                
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/features' component={Features}/>
                    <Route exact path='/pricing' component={Pricing}/>
                </Switch>

                <Footer />
            </BrowserRouter>
        )
    }
}

export default Router