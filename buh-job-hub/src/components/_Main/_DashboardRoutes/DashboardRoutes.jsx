import React, { Component } from 'react';
import DashboardNav from '../../Dashboard/DashboardNav/DashboardNav';
import { Switch, Route,Redirect } from 'react-router-dom';
import DashboardWebsiteInfo from '../../Dashboard/DashboardContent/DashboardWebsiteInfo';
import Message from '../../Message/Message';
import ManageJobs from '../../Management/Employers/ManageJobs/ManageJobs';
import ManageApplications from '../../Management/Employers/ManageApplications/ManageApplications';
import AddJob from '../../Management/Employers/AddJob/AddJob';
import ManageResumes from '../../Management/Candidates/ManageResumes/ManageResumes';
import JobAlerts from '../../Management/Candidates/JobAlerts/JobAlerts';
import Resume from '../../Management/Candidates/Resume(Container)/Resume';
import Profile from '../../Account/Profile/Profile';
const AdminRoute = ({ component: Component, ...rest }) => {
    
    return (
        <Route {...rest} render={(props) => (
      localStorage.getItem('user')=='1'
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  )
    }
const EmployerRoute = ({ component: Component, ...rest }) => {
    
        return (
            <Route {...rest} render={(props) => (
          localStorage.getItem('user')=='2'
            ? <Component {...props} />
            : <Redirect to='/' />
        )} />
      )
        }
const CandidateRoute = ({ component: Component, ...rest }) => {
    
            return (
                <Route {...rest} render={(props) => (
              localStorage.getItem('user')=='3'
                ? <Component {...props} />
                : <Redirect to='/' />
            )} />
          )
            }
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
                    <EmployerRoute exact path='/dashboard/manage-jobs' component={ManageJobs}/>
                    {/* <Route path='/dashboard/manage-applications' component={ManageApplications}/> */}
                    <EmployerRoute path="/dashboard/manage-jobs/:id" component={({match})=> <ManageApplications match = {match}/>} />
                    <EmployerRoute path='/dashboard/add-job' component={AddJob}/>
                    <CandidateRoute path='/dashboard/manage-resumes' component={ManageResumes}/>
                    <CandidateRoute path='/dashboard/job-alerts' component={JobAlerts}/>
                    <CandidateRoute path='/dashboard/edit-resume/:id' component={({match}) => <Resume match = {match} form = "Edit Resume"/>}/>
                    <CandidateRoute path='/dashboard/add-resume' component={({match}) => <Resume match = {match} form = "Add Resume"/>}/>
                    <Route path='/dashboard/profile/:id' component={({match})=> <Profile match = {match}/>} />
                    <AdminRoute exact path='/dashboard/manage-users' component={ManageJobs}/>
                    <AdminRoute path="/dashboard/manage-users/:id" component={({match})=> <ManageApplications match = {match}/>} />
                    <AdminRoute path='/dashboard/add-user' component={AddJob}/>
                </Switch>
            </div>
        )
    }
}
