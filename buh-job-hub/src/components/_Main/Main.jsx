import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import JobPage from '../Pages/JobPage/JobPage'
import ResumePage from '../Pages/ResumePage/ResumePage'
import Contact from '../Pages/Contact/Contact'
import Account from '../Account/Account'
import BrowseJob from '../BrowseListings/BrowseJob/BrowseJob'
import BrowseResumes from '../BrowseListings/BrowseResumes/BrowseResumes'
import BrowseCategories from '../BrowseListings/BrowseCategories/BrowseCategories'
export default class Main extends Component {
    render() {
        return (
            <Switch>
                {/* <Route exact path='/' component={Home}/> */}
                <Route exact path='/job-page' component={JobPage}/>
                <Route exact path='/account' component={Account}/>
                <Route exact path='/resume-page' component={ResumePage}/>
                <Route exact path='/contact-page' component={Contact}/>
                <Route exact path='/browse-jobs' component={BrowseJob}/>
                <Route exact path='/browse-resumes' component={BrowseResumes}/>
                <Route exact path='/browse-categories' component={BrowseCategories}/>
            </Switch>
        )
    }
}
