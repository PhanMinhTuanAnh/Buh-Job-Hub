import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


class AddResume extends Component {

    titlebar = () => {
        return(
            <div id="titlebar">
                <div class="row">
                    <div class="col-md-12">
                    <h2>{this.props.form}</h2>
                        <nav id="breadcrumbs">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/dashboard">Dashboard</Link></li>
                                <li>{this.props.form}</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    } 

    getResume = () => {
        let _resume = {
            "id": null,
            "title":null,
            "location":null,
            "user_id":null,
            "user_name":null,
            "user_email":null,
            "created_at_convert":null
        };
        this.props.resumes.map((resume, key) => {
            if(resume.id == this.props.match.params.id)
                _resume = resume
        })
        return _resume;
    }

    details = () => {

        let resume = this.getResume();

        let styleText = {
            color: "black"
        }
        

        let style = {
            width: "100%",
        }
        return(
            <div class="dashboard-list-box margin-top-0">
                <h4>Details</h4>
                <div class="dashboard-list-box-content">

                <div class="submit-page">

                    <div class="form">
                        <h5>Your Name</h5>
                        <input class="search-field" type="text" 
                            placeholder={resume.user_name == null ? "Your full name" : ""}
                            value={resume.user_name == null ? "" : resume.user_name}
                            style = {resume.user_name == null ? {} : styleText}
                        />
                    </div>

                    <div class="form">
                        <h5>Your Email</h5>
                        <input class="search-field" type="text" 
                            placeholder={resume.user_email == null ? "mail@example.com" : ""} 
                            value={resume.user_email == null ? "" : resume.user_email}
                            style = {resume.user_email == null ? {} : styleText}
                        />
                    </div>

                    <div class="form">
                        <h5>Professional Title</h5>
                        <input class="search-field" type="text" 
                            placeholder={resume.title == null ? "e.g. Web Developer" : ""} 
                            value={resume.title == null ? "" : resume.title}
                            style = {resume.title == null ? {} : styleText}
                        />
                    </div>

                    <div class="form">
                        <h5>Location</h5>
                        <input class="search-field" type="text" 
                            placeholder={resume.location == null ? "e.g. London, UK" : ""} 
                            value={resume.location == null ? "" : resume.location}
                            style = {resume.location == null ? {} : styleText}
                        />
                    </div>

                    <div class="form">
                        <h5>Photo <span>(optional)</span></h5>
                        <label class="upload-btn">
                            <input type="file" multiple />
                            <i class="fa fa-upload"></i> Browse
                        </label>
                        <span class="fake-input">No file selected</span>
                    </div>

                    <div class="form">
                        <h5>Video <span>(optional)</span></h5>
                        <input class="search-field" type="text" placeholder="A link to a video about you" value=""/>
                    </div>

                    <div class="form" style={style}>
                        <h5>Resume Content</h5>
                        <textarea class="WYSIWYG" name="summary" cols="40" rows="3" id="summary" spellcheck="true"></textarea>
                    </div>

                </div>

                </div>
            </div>
        )
    }

    education = () =>{
        
        return(
            <div class="dashboard-list-box margin-top-30">
                <h4>Education</h4>
                <div class="dashboard-list-box-content with-padding">

                    <div class="form-inside">

                        <div class="form boxed box-to-clone education-box">
                            <a href="#" class="close-form remove-box button"><i class="fa fa-close"></i></a>
                            <input class="search-field" type="text" placeholder="School Name" value=""/>
                            <input class="search-field" type="text" placeholder="Qualification(s)" value=""/>
                            <input class="search-field" type="text" placeholder="Start / end date" value=""/>
                            <textarea name="desc" id="desc" cols="30" rows="10" placeholder="Notes (optional)"></textarea>
                        </div>

                        <a href="#" class="button gray add-education add-box margin-top-10"><i class="fa fa-plus-circle"></i> Add Education</a>
                    </div>

                </div>
            </div>
        )
    } 

    experience = () => {
        return(
            <div class="dashboard-list-box margin-top-30">
                <h4>Experience</h4>
                <div class="dashboard-list-box-content with-padding">
                <div class="form-inside">

                <div class="form boxed box-to-clone experience-box">
                    <a href="#" class="close-form remove-box button"><i class="fa fa-close"></i></a>
                    <input class="search-field" type="text" placeholder="Employer" value=""/>
                    <input class="search-field" type="text" placeholder="Job Title" value=""/>
                    <input class="search-field" type="text" placeholder="Start / end date" value=""/>
                    <textarea name="desc1" id="desc1" cols="30" rows="10" placeholder="Notes (optional)"></textarea>
                </div>

                <a href="#" class="button gray add-experience add-box margin-top-10"><i class="fa fa-plus-circle"></i> Add Experience</a>
                </div>


                </div>
            </div>
        )
    }

    table = () => {
        let styleButton = {
            float: "right",
        }

        let button = <Link to="#" class="button margin-top-30"><i class="fa fa-save"/> Save</Link>
        
        if(this.props.form == "Add Resume"){
            button = <Link to="#" class="button margin-top-30"><i class="fa fa-plus-circle"/> Add</Link>

        }

        return(
            <div class="row">
                        
                <div class="col-lg-12 col-md-12">

                    {this.details()}
                    {this.education()}
                    {this.experience()}

                    {button}
                    <Link to="#" class="button margin-top-30" style={styleButton}>Preview <i class="fa fa-arrow-circle-right"></i></Link>
                </div>

                <div class="col-md-12">
                    <div class="copyrights">© 2019 WorkScout. All Rights Reserved.</div>
                </div>

            </div>
        )
    }

    renderResume = () =>{
        return(
            <div class="dashboard-content">
                {this.titlebar()}
                {this.table()}
            </div>
        )
    }

    render() {
        return (
            <>{this.renderResume()}</>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        resumes: state.resumes_reducer,
    }
}
export default connect(mapStateToProps, null)(AddResume);