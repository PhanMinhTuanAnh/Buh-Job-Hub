import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import JobPage from '../Pages/JobPage/JobPage'
export default class Main extends Component {
    render() {
        return (
            <Switch>
                {/* <Route exact path='/' component={}/> */}
                <Route exact path='/jobpage' component={JobPage}/>
            </Switch>
        )
    }
}
