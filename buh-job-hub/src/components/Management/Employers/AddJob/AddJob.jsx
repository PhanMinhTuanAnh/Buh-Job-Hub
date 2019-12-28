import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../../../../react-redux/index_actions'
class AddJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:0,
            email: '',
            title: '',
            job_type: 0,
            category: 0,
            location : 0,
            company: 0,
            user_id : 0,

        }
    }
    componentDidMount() {
        this.props.actFetchJobTypesRequest();
        this.props.actFetchCategoriesRequest();
        this.props.actFetchJobLocationsRequest();
        this.props.actFetchCompaniesRequest();
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            if(id) this.props.actGetJobPostRequest(id);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.job_post_edit) {
            var {job_post_edit} = nextProps;
            console.log(job_post_edit)
            this.setState({
                id: job_post_edit.id,
                title: job_post_edit.job_description,
                job_type: job_post_edit.job_type_id,
                category: job_post_edit.category_id,
                location: job_post_edit.job_location_id,
                company: job_post_edit.company_id,
                user_id : job_post_edit.user_id
            })
            console.log(this.state)
        }
    }
    showJobTypeItem = (job_types) => {
        return (
            job_types.map((job_type, index) => {
                return (
                    <option key={index} value={job_type.id}>{job_type.job_type}</option>
                )
            })
        )
    }
    showCategoryItem = (categories) => {
        return (
            categories.map((category, index) => {
                return (
                    <option key={index} value={category.id}>{category.category_name}</option>
                )
            })
        )
    }
    showLocationItem = (job_locations) => {
        return (
            job_locations.map((job_location, index) => {
                return (
                    <option key={index} value={job_location.id}>{job_location.city}</option>
                )
            })
        )
    }
    showCompanyItem =(companies) => {
        return (
            companies.map((company, index) => {
                return (
                    <option key={index} value={company.id}>{company.company_name}</option>
                )
            })
        )
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }
    onAddJob =(e)=>{
        e.preventDefault();
        var {id, title, job_type, category,location,company } = this.state
        var job_post =null;
        if(id==0){
            job_post = {
                // id:id,
                job_description: title,
                category_id: parseInt(category),
                user_id : 1, // user đang đăng nhập vào đây 
                job_type_id : parseInt(job_type),
                job_location_id : parseInt(location),
                company_id : parseInt(company)
            }
        }
        else{
            job_post = {
                id:id,
                job_description: title,
                category_id: parseInt(category),
                user_id : 1, // user đang đăng nhập vào đây 
                job_type_id : parseInt(job_type),
                job_location_id : parseInt(location),
                company_id : parseInt(company)
            }
        }
        console.log(job_post)
        if(id==0){
            console.log('add')
            this.props.actAddJobPostRequest(job_post)
        }else{
            console.log('update')
            this.props.actUpdateJobPostRequest(job_post)
        }
    }
    
    render() {
        let style = {
            width: '100%',
        }
        var { email, title, job_type, category,location ,company} = this.state
        return (
            <div>
                <div class="dashboard-content">
                    <div id="titlebar">
                        <div class="row">
                            <div class="col-md-12">
                                <h2>Add Job</h2>
                                <nav id="breadcrumbs">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Dashboard</a></li>
                                        <li>Add Job</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div class="row">

                        <div class="col-lg-12 col-md-12">

                            <div class="dashboard-list-box margin-top-0">
                                <h4>Job Details</h4>
                                <div class="dashboard-list-box-content">

                                    <div class="submit-page">

                                        <div class="form">
                                            <h5>Your Email</h5>
                                            <input class="search-field" type="text" placeholder="mail@example.com"
                                                name="email"
                                                value={email}
                                                onChange={this.onChange} />
                                        </div>

                                        <div class="form">
                                            <h5>Job Title</h5>
                                            <input class="search-field" type="text" placeholder=""
                                                name="title"
                                                value={title}
                                                onChange={this.onChange} />
                                        </div>

                                        <div class="form">
                                            <h5>Job Type</h5>
                                            <select data-placeholder="Full-Time" class="chosen-select-no-single"
                                                name="job_type"
                                                value={job_type}
                                                onChange={this.onChange}>
                                                {this.showJobTypeItem(this.props.job_types)}
                                            </select>
                                        </div>


                                        <div class="form">
                                            <h5>Category</h5>
                                            <select data-placeholder="Choose Categories" class="chosen-select-no-single"
                                                name="category"
                                                value={category}
                                                onChange={this.onChange}>
                                                {this.showCategoryItem(this.props.categories)}
                                            </select>
                                        </div>


                                        <div class="form">
                                            <h5>Location</h5>
                                            <select data-placeholder="Choose Locations" class="chosen-select-no-single"
                                                name="location"
                                                value={location}
                                                onChange={this.onChange}>
                                                {this.showLocationItem(this.props.job_locations)}
                                            </select>
                                        </div>


                                        <div class="form">
                                        <h5>Company</h5>
                                            <select data-placeholder="Choose Comapany" class="chosen-select-no-single"
                                                name="company"
                                                value={company}
                                                onChange={this.onChange}>
                                                {this.showCompanyItem(this.props.companies)}
                                            </select>
                                        </div>


                                        <div class="form" style={style}>
                                            <h5>Description</h5>
                                            <textarea class="WYSIWYG" name="summary" cols="40" rows="3" id="summary" spellCheck="true"></textarea>
                                        </div>

                                        {/* <div class="form">
                                            <h5>Application email / URL</h5>
                                            <input type="text" placeholder="Enter an email address or website URL" />
                                        </div>

                                        <div class="form">
                                            <h5>Closing Date <span>(optional)</span></h5>
                                            <input data-role="date" type="text" placeholder="yyyy-mm-dd" />
                                            <p class="note">Deadline for new applicants.</p>
                                        </div> */}

                                    </div>

                                </div>
                            </div>


                            {/* <div class="dashboard-list-box margin-top-30">
                                <h4>Company Details</h4>
                                <div class="dashboard-list-box-content">

                                    <div class="submit-page">

                                        <div class="form">
                                            <h5>Company Name</h5>
                                            <input type="text" placeholder="Enter the name of the company" />
                                        </div>

                                        <div class="form">
                                            <h5>Website <span>(optional)</span></h5>
                                            <input type="text" placeholder="http://" />
                                        </div>

                                        <div class="form">
                                            <h5>Tagline <span>(optional)</span></h5>
                                            <input type="text" placeholder="Briefly describe your company" />
                                        </div>

                                        <div class="form">
                                            <h5>Video <span>(optional)</span></h5>
                                            <input type="text" placeholder="A link to a video about your company" />
                                        </div>

                                        <div class="form">
                                            <h5>Twitter Username <span>(optional)</span></h5>
                                            <input type="text" placeholder="@yourcompany" />
                                        </div>

                                        <div class="form">
                                            <h5>Logo <span>(optional)</span></h5>
                                            <label class="upload-btn">
                                                <input type="file" multiple />
                                                <i class="fa fa-upload"></i> Browse
                                        </label>
                                            <span class="fake-input">No file selected</span>
                                        </div>


                                    </div>

                                </div>
                            </div> */}
                            <a href="#" class="button margin-top-30" onClick ={this.onAddJob}>Add Job <i class="fa fa-arrow-circle-right"></i></a>
                        </div>


                        <div class="col-md-12">
                            <div class="copyrights">© 2019 WorkScout. All Rights Reserved.</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        job_types: state.job_types,
        categories: state.categories,
        job_locations : state.job_locations,
        companies : state.companies,
        job_post_edit : state.job_post_edit,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actFetchJobTypesRequest: () => {
            dispatch(actions.actFetchJobTypesRequest())
        },
        actFetchCategoriesRequest: () => {
            dispatch(actions.actFetchCategoriesRequest())
        },
        actAddJobPostRequest: (job_post) => {
            dispatch(actions.actAddJobPostRequest(job_post))
        },
        actGetJobPostRequest: (id) => {
            dispatch(actions.actGetJobPostRequest(id))
        },
        
        actFetchJobLocationsRequest: (job_locations) => {
            dispatch(actions.actFetchJobLocationsRequest(job_locations))
        },
        actFetchCompaniesRequest: (companies) => {
            dispatch(actions.actFetchCompaniesRequest(companies))
        },
        actUpdateJobPostRequest: (job_post) => {
            dispatch(actions.actUpdateJobPostRequest(job_post))
        },
        
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddJob);