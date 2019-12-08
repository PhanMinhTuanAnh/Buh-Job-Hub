import React, { Component } from 'react'
import DashboardNav from '../../Dashboard/DashboardNav/DashboardNav'
import { Switch, Route } from 'react-router-dom'
import DashboardWebsiteInfo from '../../Dashboard/DashboardContent/DashboardWebsiteInfo'
import Message from '../../Message/Message'
import ManageJobs from '../../Management/Employers/ManageJobs/ManageJobs'
import ManageApplications from '../../Management/Employers/ManageApplications/ManageApplications'
import AddJob from '../../Management/Employers/AddJob/AddJob'

export default class DashboardRoutes extends Component {
    render() {
        let style = {
            paddingTop: "0px",
        }
        return (
            <div id="dashboard" style = {style}>
                <DashboardNav/>
                <Switch>
                    <Route exact path='/dashboard' component={DashboardWebsiteInfo}/>
                    <Route path='/dashboard/message' component={Message}/>
                    <Route path='/dashboard/manage-jobs' component={ManageJobs}/>
                    <Route path='/dashboard/manage-applications' component={ManageApplications}/>
                    <Route path='/dashboard/add-job' component={AddJob}/>

                </Switch>
            </div>
        )
    }
}
