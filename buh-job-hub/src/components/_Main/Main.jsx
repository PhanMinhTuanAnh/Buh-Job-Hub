import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './_Home/Home'
import BrowesJob from './_BrowseListings/_BrowesJob/BrowesJob'
export default class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/browesjob' component={BrowesJob}/>
            </Switch>
        )
    }
}
