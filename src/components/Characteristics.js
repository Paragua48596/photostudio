import React, { Component } from "react"

//Imagenes
import images from '../assets/images/images.png'
import cinema from '../assets/images/cinema.png'
import drag from '../assets/images/drag.png'
import camera from '../assets/images/camera.png'
import marketing from '../assets/images/marketing.png'
import responsive from '../assets/images/responsive.png'

class Characteristics extends Component {
    render() {
        return (
            <section className="features">
                <div className="flex">
                    <div className="headline">
                        <h2 className="headline_heading">Features</h2>
                    </div>
                    <div className="item">
                        <div className="item__image">
                            <img src={images} alt="" />
                        </div>
                        <div className="item__content">
                            <h2 className="item__title">Lorem ipsum dolor</h2>
                            <p className="item__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
                                doloribus iusto molestias mollitia numquam eos eaque sed qui, ab sequi.</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item__image">
                            <img src={marketing} alt="" />
                        </div>
                        <div className="item__content">
                            <h2 className="item__title">Lorem ipsum dolor</h2>
                            <p className="item__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
                                doloribus iusto molestias mollitia numquam eos eaque sed qui, ab sequi.</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item__image">
                            <img src={cinema} alt="" />
                        </div>
                        <div className="item__content">
                            <h2 className="item__title">Lorem ipsum dolor</h2>
                            <p className="item__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
                                doloribus iusto molestias mollitia numquam eos eaque sed qui, ab sequi.</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item__image">
                            <img src={drag} alt="" />
                        </div>
                        <div className="item__content">
                            <h2 className="item__title">Lorem ipsum dolor</h2>
                            <p className="item__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
                                doloribus iusto molestias mollitia numquam eos eaque sed qui, ab sequi.</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item__image">
                            <img src={responsive} alt="" />
                        </div>
                        <div className="item__content">
                            <h2 className="item__title">Lorem ipsum dolor</h2>
                            <p className="item__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
                                doloribus iusto molestias mollitia numquam eos eaque sed qui, ab sequi.</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item__image">
                            <img src={camera} alt="" />
                        </div>
                        <div className="item__content">
                            <h2 className="item__title">Lorem ipsum dolor</h2>
                            <p className="item__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
                                doloribus iusto molestias mollitia numquam eos eaque sed qui, ab sequi.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Characteristics