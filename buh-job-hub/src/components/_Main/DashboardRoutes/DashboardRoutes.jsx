import React, { Component } from 'react'
import DashboardNav from '../../Dashboard/DashboardNav/DashboardNav'
import { Switch, Route } from 'react-router-dom'
import DashboardWebsiteInfo from '../../Dashboard/DashboardContent/DashboardWebsiteInfo'

export default class DashboardRoutes extends Component {
    render() {
        let style = {
            paddingTop: "0px",
        }
        return (
            <div id="dashboard" style = {style}>
                <DashboardNav/>
                <Switch>
                    <Route path='/dashboard/webinfo' component={DashboardWebsiteInfo}/>
                </Switch>
            </div>
        )
    }
}
