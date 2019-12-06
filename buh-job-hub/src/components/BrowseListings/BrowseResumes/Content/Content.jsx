import React, { Component } from 'react'
import Widgets from './Widgets/Widgets'
import ListingResume from './ListingResume/ListingResume';

export default class Content extends Component {
    render() {
        return (
            <div className="container">
                <ListingResume/>
                <Widgets/>
            </div>
        );
    }
}



