import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Menu extends Component {
    render() {
        return (

            <nav className="navbar">

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
            </nav>
        )
    }
}

export default Menu