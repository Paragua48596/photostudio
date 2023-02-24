import React, { Component } from 'react'

class Menu extends Component {
    render() {
        return (

            <nav className="navbar">

                <div className="logo">
                    <h1 className="logo__brand">
                        <a href="index.html" className="logo__url">
                            Business
                        </a>
                    </h1>

                </div>

                <div className="navbar__menu">

                    <ul className="nav_list">
                        <li className="nav_list-item">
                            <a href="index.html" className="nav_list-link">Home</a>
                        </li>
                        <li className="nav_list-item">
                            <a href="features.html" className="nav_list-link">Features</a>
                        </li>
                        <li className="nav_list-item">
                            <a href="pricing.html" className="nav_list-link">Pricing</a>
                        </li>
                    </ul>

                    <button className="btn">Contact Us</button>

                </div>
            </nav>
        )
    }
}

export default Menu