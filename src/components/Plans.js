import React, { Component } from "react"

class Plans extends Component {
    render() {
        return (
            <section id="plans" className="plans">
                <div className="headline">
                    <h2 className="headline_heading">Our Work</h2>
                </div>
                <div className="plans__container">
                    <div className="card">
                        <ul className="card__list">
                            <li className="card__list-item">Basic</li>
                            <li className="card__list-item"><span className="bold">10</span> photos</li>
                            <li className="card__list-item">Sin Sesion de bodas</li>
                            <li className="card__list-item">No en Estudio</li>
                            <li className="card__list-item">Envio Digital</li>
                            <li className="card__list-item">Filtros y efectos</li>
                            <li className="card__list-item">$ 35</li>
                            <li className="card__list-item"><button className="btn">Buy</button></li>
                        </ul>
                    </div>

                    <div className="card">
                        <ul className="card__list">
                            <li className="card__list-item">Pro</li>
                            <li className="card__list-item"><span className="bold">30</span> photos</li>
                            <li className="card__list-item">Sin Sesion de bodas</li>
                            <li className="card__list-item">Estudio Fotografico</li>
                            <li className="card__list-item">Envio Digital</li>
                            <li className="card__list-item">Filtros y efectos</li>
                            <li className="card__list-item">$ 85</li>
                            <li className="card__list-item"><button className="btn">Buy</button></li>
                        </ul>
                    </div>

                    <div className="card">
                        <ul className="card__list">
                            <li className="card__list-item">Premium</li>
                            <li className="card__list-item"><span className="bold">Fotos Ilimitadas</span></li>
                            <li className="card__list-item">Sesion de bodas</li>
                            <li className="card__list-item">Estudio Fotografico</li>
                            <li className="card__list-item">Fotos Impresas y Digital</li>
                            <li className="card__list-item">Filtros y efectos</li>
                            <li className="card__list-item">$ 110</li>
                            <li className="card__list-item"><button className="btn">Buy</button></li>
                        </ul>
                    </div>

                </div>
            </section>
        )
    }
}

export default Plans