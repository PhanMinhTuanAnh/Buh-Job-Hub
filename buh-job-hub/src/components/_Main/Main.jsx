import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import JobPage from '../Pages/JobPage/JobPage'
import ResumePage from '../Pages/ResumePage/ResumePage'
import Contact from '../Pages/Contact/Contact'
import Account from '../Account/Account'
export default class Main extends Component {
    render() {
        return (
            <Switch>
                {/* <Route exact path='/' component={Home}/> */}
                <Route exact path='/job-page' component={JobPage}/>
                <Route exact path='/account' component={Account}/>
                <Route exact path='/jobpage' component={JobPage}/>
                <Route exact path='/resumepage' component={ResumePage}/>
                <Route exact path='/contactpage' component={Contact}/>
            </Switch>
        )
    }
}
