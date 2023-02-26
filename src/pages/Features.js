import React, { Component } from "react"
import Header from "../components/Header"
import Characteristics from "../components/Characteristics"

class Features extends Component {
    render() {
        return (
            <React.Fragment>
                <Header origin="features" />
                <main>
                    <Characteristics />
                </main>
            </React.Fragment>
        )
    }
}

export default Features