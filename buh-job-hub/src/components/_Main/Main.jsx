import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import JobPage from '../Pages/JobPage/JobPage'
import ResumePage from '../Pages/ResumePage/ResumePage'

export default class Main extends Component {
    render() {
        return (
            <Switch>
                {/* <Route exact path='/' component={}/> */}
                <Route exact path='/jobpage' component={JobPage}/>ResumePage
                <Route exact path='/resumepage' component={ResumePage}/>
            </Switch>
        )
    }
}
