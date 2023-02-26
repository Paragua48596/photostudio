import React, { Component } from "react"
import Header from "../components/Header"
import Plans from "../components/Plans"
class Pricing extends Component {
    render() {
        return (
            <React.Fragment>
                <Header origin="pricing" />
                <main>
                    <Plans />
                </main>
            </React.Fragment>
        )
    }
}

export default Pricing