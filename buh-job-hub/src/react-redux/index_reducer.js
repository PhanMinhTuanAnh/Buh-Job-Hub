import {
    combineReducers
} from 'redux';
import job_posts from './Job_post/job_posts'
import job_post_activities from './Job_post_activities/job_post_activities'
const appReducer = combineReducers({
    job_posts,
    job_post_activities,

})

export default appReducer;