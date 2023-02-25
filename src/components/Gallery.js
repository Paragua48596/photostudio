import React, { Component } from 'react'

//Imagenes
import photo from '../assets/images/photo.jpg'
import photo2 from '../assets/images/photo-2.jpg'
import photo3 from '../assets/images/photo-3.jpg'
import photo4 from '../assets/images/photo-4.jpg'
import photo5 from '../assets/images/photo-5.jpg'
import photo6 from '../assets/images/photo-6.jpg'
import photo7 from '../assets/images/photo-7.jpg'

class Gallery extends Component {
    render() {
        return (
            <section className="gallery">
                <div className="headline">
                    <h2 className="headline_heading">Our Work</h2>
                </div>
                <div className="container">
                    <div>
                        <img src={photo} alt="" />
                    </div>
                    <div>
                        <img src={photo2} alt="" />
                    </div>
                    <div>
                        <img src={photo3} alt="" />
                    </div>
                    <div>
                        <img src={photo4} alt="" />
                    </div>
                    <div>
                        <img src={photo5} alt="" />
                    </div>
                    <div>
                        <img src={photo6} alt="" />
                    </div>
                    <div>
                        <img src={photo7} alt="" />
                    </div>
                </div>
            </section>
        )
    }
}

export default Gallery