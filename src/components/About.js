import React, { Component } from 'react'

//Imagenes
import city from '../assets/images/city.jpg'
import camera from '../assets/images/camera-man.jpg'

class About extends Component {
    render() {
        return (
            <React.Fragment>

                <section className="about">
                    <div className="grid">

                        <div className="row">
                            <img src={city} alt="" className="row_img" />
                        </div>

                        <div className="row">

                            <div className="content">
                                <h2 className="content_heading">A human touch</h2>
                                <p className="content_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ipsa, in temporibus optio vitae ipsam.</p>
                                <button className="btn">Contact Us</button>
                            </div>

                        </div>

                    </div>
                </section>
                <section className="team">
                    <div className="grid">

                        <div className="row">

                            <div className="content">
                                <h2 className="content_heading">The best of the best</h2>
                                <p className="content_description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente blanditiis dolorum asperiores suscipit repellendus molestiae.</p>
                                <button className="btn content_btn">Contact Us</button>
                            </div>

                        </div>

                        <div className="row">
                            <img src={camera} alt="" className="row_img" />
                        </div>

                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default About