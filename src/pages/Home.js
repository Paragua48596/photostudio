import React, { Component } from "react"
import Header from "../components/Header"
import About from "../components/About"
import Stories from "../components/Stories"
import Gallery from "../components/Gallery"

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header origin="home" />
                <main>
                    <About />
                    <Stories />
                    <Gallery />
                </main>
            </React.Fragment>
        )
    }
}

export default Home