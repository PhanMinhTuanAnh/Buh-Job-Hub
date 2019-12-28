import React, { Component } from 'react';
import { Switch, Route,Router, Redirect} from 'react-router-dom';
import Home from '../Home/Home';
import JobPage from '../Pages/JobPage/JobPage';
import ResumePage from '../Pages/ResumePage/ResumePage';
import Contact from '../Pages/Contact/Contact';
import SignInSignUp from '../Account/SignInSignUp/SignInSignUp';
import BrowseJob from '../BrowseListings/BrowseJob/BrowseJob';
import BrowseResumes from '../BrowseListings/BrowseResumes/BrowseResumes';
import BrowseCategories from '../BrowseListings/BrowseCategories/BrowseCategories';
import DashboardRoutes from './_DashboardRoutes/DashboardRoutes';


const PrivateRoute = ({ component: Component, ...rest }) => {
    
    return (
        <Route {...rest} render={(props) => (
      localStorage.getItem('token')
        ? <Component {...props} />
        : <Redirect to='/signin' />
    )} />
  )
    }
export default class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/job-page' component={JobPage}/>
                {/* <Route path='/account' component={SignInSignUp}/> */}
                <Route path='/signup' component={()=><SignInSignUp type_id = "1"/>}/>
                <Route path='/signin' component={()=><SignInSignUp type_id = "2"/>}/>
                <Route path='/resume-page' component={ResumePage}/>
                <Route path='/contact-page' component={Contact}/>
                <Route exact path='/browse-jobs' component={BrowseJob}/>
                <Route path="/browse-jobs/:id" component={({match})=> <JobPage match = {match}/>} />
                <Route path='/browse-resumes' component={BrowseResumes}/>
                <Route path='/browse-categories' component={BrowseCategories}/>
                <PrivateRoute path='/dashboard' component={DashboardRoutes}/>
                </Switch> 
            )
        }
        
    }
}
const mapStateToProps = state => ({
    currentUser: state.login_reducer.currentUser 
  })
