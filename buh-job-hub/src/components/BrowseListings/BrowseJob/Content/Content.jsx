import React, { Component } from 'react'
import ListingJob from './ListingJob/ListingJob'
import Widgets from './Widgets/Widgets'

export default class Content extends Component {
    render() {
        return (
            <div className="container">
                <ListingJob/>
                <Widgets/>
            </div>
        );
    }
}



