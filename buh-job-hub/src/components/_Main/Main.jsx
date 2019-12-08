import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import JobPage from '../Pages/JobPage/JobPage'
import ResumePage from '../Pages/ResumePage/ResumePage'
import Contact from '../Pages/Contact/Contact'
import SignInSignUp from '../Account/SignInSignUp/SignInSignUp'
import BrowseJob from '../BrowseListings/BrowseJob/BrowseJob'
import BrowseResumes from '../BrowseListings/BrowseResumes/BrowseResumes'
import BrowseCategories from '../BrowseListings/BrowseCategories/BrowseCategories'
import DashboardRoutes from './_DashboardRoutes/DashboardRoutes'
export default class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/job-page' component={JobPage}/>
                <Route path='/account' component={SignInSignUp}/>
                <Route path='/resume-page' component={ResumePage}/>
                <Route path='/contact-page' component={Contact}/>
                <Route path='/browse-jobs' component={BrowseJob}/>
                <Route path='/browse-resumes' component={BrowseResumes}/>
                <Route path='/browse-categories' component={BrowseCategories}/>
                <Route path='/dashboard' component={DashboardRoutes}/>

            </Switch>
        )
    }
}
