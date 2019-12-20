import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './../../../../../../react-redux/index_actions';
import { Link } from 'react-router-dom';
class ListJob_Item extends Component {
    async componentDidMount() {
        await this.props.actFetchListJobsDetailsRequest();
    }
    showBrowesJob = (jobs) => {
        return (
            jobs.map((job, index) => {
                // console.log(job.company.image[0])
                return (
                    
                    <Link key={index} to={`/browse-jobs/${job.job_description.id}`} className={`listing ${this.showCssType(job.type.job_type)}`}>
                        <div className="listing-logo">
                            <img src={job.company.image[0] ? job.company.image[0].company_image : "https://cdn2.iconfinder.com/data/icons/flat-business-icon/600/shares-company-finance-512.png"} alt="" />
                        </div>
                        <div className="listing-title">
                            <h4>{job.job_description.job_description} <span className="listing-type">{job.type.job_type}</span></h4>
                            <ul className="listing-icons">
                                <li><i className="ln ln-icon-Management" /> {job.location.country}</li>
                                <li><i className="ln ln-icon-Map2" /> {job.company.company.company_name}</li>
                                <li><i className="ln ln-icon-Money-2" /> $5000 - $7000</li>
                                <li><div className="listing-date new">new</div></li>
                            </ul>
                        </div>
                    </Link>
                )
            })
        );
    }
    render() {
        var { jobs } = this.props
        return (

            <>{this.showBrowesJob(jobs)}</>
        );
    }
    showCssType=(str)=>{
        console.log(str)
        if(str = 'Freelance') return 'freelance'
        else if(str = 'Full-time') return 'full-time'
        else if(str = 'Part-time') return 'part-time'
        else if(str = 'Internship') return 'internship'
        else return 'temporary'
    }
}
const mapStateToProps = (state) => {
    return {
        jobs: state.browse_job,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actFetchListJobsDetailsRequest: () => {
            dispatch(actions.actFetchListJobsDetailsRequest())
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListJob_Item);
