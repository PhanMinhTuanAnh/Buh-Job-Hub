import {
    combineReducers
} from 'redux';
import login_reducer from './Login/login_reducer'
import resumes_reducer from './candidates/resumes_reducer'
import job_posts from './Job_post/job_posts'
import job_post_edit from './Job_post/job_post_edit'
import job_post_activities from './Job_post_activities/job_post_activities'
import job_types from './Job_type/job_types'
import job_page from './Job_page/job_page'
import categories from './Categories/categories'
import job_locations from './Job_location/job_locations'
import companies from './Company/companies'

const appReducer = combineReducers({
    login_reducer,
    job_posts,
    job_post_edit,
    job_post_activities,
    job_types,
    job_page,
    categories,
    job_locations,
    resumes_reducer,
    companies,

})

export default appReducer;