import React, { Component } from 'react'
import About from './About/About'
import Widgets from './Widgets/Widgets';
export default class Content extends Component {
    render() {
        return (
            <div className="container">
                <About />
                <Widgets />
            </div>
        );
    }
}



