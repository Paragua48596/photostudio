import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

//Imagenes
import burguer from '../assets/images/burguer.png'

class Menu extends Component {
    show = () => {
        var burguer = document.querySelector('#burguer-menu')
        burguer.classList.remove('hidden')
    }

    close = () => {
        var burguer = document.querySelector('#burguer-menu')
        burguer.classList.add('hidden')
    }

    render() {

        return (
            <nav className="navbar">

                <div className='burguer-menu hidden' id='burguer-menu'>
                    <button className='burguer-close' id='burguer-close' onClick={this.close}>X</button>
                    <ul className='burguer-menu_ul'>
                        <li className='burguer_li'>
                            <NavLink to='/' className='burguer_link' onClick={this.close}>Home</NavLink>
                        </li>
                        <li className='burguer_li'>
                            <NavLink to='/features' className='burguer_link' onClick={this.close}>Features</NavLink>
                        </li>
                        <li className='burguer_li'>
                            <NavLink to='/pricing' className='burguer_link' onClick={this.close}>Pricing</NavLink>
                        </li>
                        <li className='burguer_li'>
                            <button className="btn">Contact Us</button>
                        </li>
                    </ul>
                </div>

                <div className="logo">
                    <h1 className="logo__brand">
                        <NavLink to='/' className="logo__url">
                            Business
                        </NavLink>
                    </h1>

                </div>

                <div className="navbar__menu">

                    <ul className="nav_list">
                        <li className="nav_list-item">
                            <NavLink to='/' className='nav_list-link' >Home</NavLink>
                        </li>
                        <li className="nav_list-item">
                            <NavLink to='/features' className='nav_list-link' >Features</NavLink>
                        </li>
                        <li className="nav_list-item">
                            <NavLink to='/pricing' className='nav_list-link' >Pricing</NavLink>
                        </li>
                    </ul>

                    <button className="btn">Contact Us</button>


                </div>
                <button className='burguer' onClick={this.show}>
                    <img src={burguer} alt="" className='burguer_icon' />
                </button>
            </nav>
        )
    }
}

export default Menu