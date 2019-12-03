import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import JobPage from '../Pages/JobPage/JobPage'
export default class Main extends Component {
    render() {
        return (
            <Switch>
                {/* <Route exact path='/' component={Home}/> */}
                <Route exact path='/job-page' component={JobPage}/>
            </Switch>
        )
    }
}
