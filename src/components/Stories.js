import React, {Component} from 'react'

class Stories extends Component {
    render(){
        return(
            <section className="stories">
            <div className="flex">
                <div className="story">
                    <div className="story_opacity"></div>
                    <div className="story_content">
                        <h2 className="story__title">Animals</h2>
                        <p className="story__author p-opaque">by John Doe</p>
                        <hr className="story_line" />
                        <button className="btn">Read story</button>
                    </div>
                </div>

                <div className="story">
                    <div className="story_opacity"></div>
                    <div className="story_content">
                        <h2 className="story__title">Nature</h2>
                        <p className="story__author p-opaque">by John Doe</p>
                        <hr className="story_line" />
                        <button className="btn">Read story</button>
                    </div>
                </div>

                <div className="story">
                    <div className="story_opacity"></div>
                    <div className="story_content">
                        <h2 className="story__title">Skate</h2>
                        <p className="story__author p-opaque">by John Doe</p>
                        <hr className="story_line" />
                        <button className="btn">Read story</button>
                    </div>
                </div>

                <div className="story">
                    <div className="story_opacity"></div>
                    <div className="story_content">
                        <h2 className="story__title">Architecture</h2>
                        <p className="story__author p-opaque">by John Doe</p>
                        <hr className="story_line" />
                        <button className="btn">Read story</button>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default Stories