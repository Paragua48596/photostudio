import React, { Component } from 'react'

//Imagenes
import people from '../assets/images/people.jpg'
import camera from '../assets/images/camera.jpg'
import sunset from '../assets/images/sunset.jpg'

class Header extends Component {

    //Funcion que despliega el titulo del banner segun la pagina
    bannerTitle = (origin) => {
        if(origin === 'home'){
            return <h2 className="content_heading">Save the moment with our service</h2>
        } else if(origin === 'features'){
            return <h2 className="content_heading">Features</h2>
        } else {
            return <h2 className="content_heading">Pricing</h2>
        }
    }

    //Funcion que despliega la imagen del banner segun la pagina
    bannerImage = (origin) => {
        if(origin === 'home'){
            return <img src={people} alt='' className='row_img' />
        } else if(origin === 'features'){
            return <img src={camera} alt='' className='row_img' />
        } else {
            return <img src={sunset} alt='' className='row_img' />
        }
    }

    render() {
        return (

            <header className="header">
                <div className="grid">

                    <div className="row">

                        <div className="content">
                            {
                                this.bannerTitle(this.props.origin)
                            }
                            <p className="content_description p-opaque">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis aliquam necessitatibus tenetur aut modi perspiciatis provident possimus deleniti dignissimos.</p>
                            <button className="btn">Contact Us</button>
                        </div>

                    </div>

                    <div className="row">
                        {
                            this.bannerImage(this.props.origin)
                        }
                    </div>

                </div>
            </header>
        )
    }
}

export default Header