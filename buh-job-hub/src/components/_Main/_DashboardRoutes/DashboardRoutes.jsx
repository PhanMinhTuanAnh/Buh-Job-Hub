import React, { Component } from 'react';
import DashboardNav from '../../Dashboard/DashboardNav/DashboardNav';
import { Switch, Route } from 'react-router-dom';
import DashboardWebsiteInfo from '../../Dashboard/DashboardContent/DashboardWebsiteInfo';
import Message from '../../Message/Message';
import ManageJobs from '../../Management/Employers/ManageJobs/ManageJobs';
import ManageApplications from '../../Management/Employers/ManageApplications/ManageApplications';
import AddJob from '../../Management/Employers/AddJob/AddJob';
import ManageResumes from '../../Management/Candidates/ManageResumes/ManageResumes';
import JobAlerts from '../../Management/Candidates/JobAlerts/JobAlerts';
import Resume from '../../Management/Candidates/Resume(Container)/Resume';
import Profile from '../../Account/Profile/Profile';

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
                    <Route exact path='/dashboard/message' component={Message}/>
                    <Route exact path='/dashboard/manage-jobs' component={ManageJobs}/>
                    {/* <Route path='/dashboard/manage-applications' component={ManageApplications}/> */}
                    <Route exact path="/dashboard/manage-jobs/:id" component={({match})=> <ManageApplications match = {match}/>} />
                    <Route exact path='/dashboard/add-job' component={AddJob}/>
                    <Route exact path="/dashboard/manage-jobs/:id/edit" component={({match})=> <AddJob match = {match}/>} />
                    <Route exact path='/dashboard/manage-resumes' component={ManageResumes}/>
                    <Route exact path='/dashboard/job-alerts' component={JobAlerts}/>
                    <Route exact path='/dashboard/edit-resume/:id' component={({match}) => <Resume match = {match} form = "Edit Resume"/>}/>
                    <Route exact path='/dashboard/add-resume' component={({match}) => <Resume match = {match} form = "Add Resume"/>}/>
                    <Route exact path='/dashboard/profile/:id' component={({match})=> <Profile match = {match}/>} />

                </Switch>
            </div>
        )
    }
}
