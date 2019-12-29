import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import './Resume.css'
import * as actions from './../../../../react-redux/index_actions'

class AddResume extends Component {

    constructor(props) {
        super(props);
        let id;
        let _resume = {
            "title":null,
            "location":null,
            "current_salary":null,
            "user_id": 53
        };
        this.props.resumes.map((resume, key) => {
            if(resume.id == this.props.match.params.id){
                _resume["title"] = resume["title"];
                _resume["location"] = resume["location"];
                _resume["current_salary"] = resume["current_salary"];
                _resume["user_id"] = resume["user_id"];
                id = resume["id"];
            }
        })
        this.state = {
            id: id,
            form: this.props.form,
            resume: _resume,
            educations: [],
            experiences: [],
        }
    }



    titlebar = () => {
        return(
            <div id="titlebar">
                <div class="row">
                    <div class="col-md-12">
                    <h2>{this.state.form}</h2>
                        <nav id="breadcrumbs">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/dashboard">Dashboard</Link></li>
                                <li>{this.state.form}</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    } 

    onChangeDetailsAction = (e) =>{
        let _resume = this.state.resume;
        _resume[e.target.name] = e.target.value;
        this.setState({
            resume: _resume
        })
        console.log(_resume);
    }

    details = () => {
        let styleText = {
            color: "black",
            
        }


        let style = {
            width: "100%",
        }

        let style1 = {
            width: "80%",
        }

        let style2 = {
            width: "20%",
        }
        return(
            <div class="dashboard-list-box margin-top-0">
                <h4>Details</h4>
                <div class="dashboard-list-box-content">

                <div class="submit-page">

                    {/* <div class="form">
                        <h5>Your Name</h5>
                        <input class="search-field" type="text" 
                            placeholder={resume.user_name == null ? "Your full name" : ""}
                            defaultValue={resume.user_name == null ? "" : resume.user_name}
                            style = {styleText}
                        />
                    </div>

                    <div class="form">
                        <h5>Your Email</h5>
                        <input class="search-field" type="text" 
                            placeholder={resume.user_email == null ? "mail@example.com" : ""} 
                            defaultValue={resume.user_email == null ? "" : resume.user_email}
                            style = {styleText}
                        />
                    </div> */}

                    <div class="form" style = {style}>
                        <h5>Professional Title</h5>
                        <input type="text" 
                            name="title"
                            placeholder={this.state.resume.title == null ? "e.g. Web Developer" : ""} 
                            defaultValue={this.state.resume.title == null ? "" : this.state.resume.title}
                            style = {styleText}
                            onChange = {this.onChangeDetailsAction}

                        />
                    </div>
                    

                    <div class="form" style={style1}>
                        <h5>Location</h5>
                        <input type="text" 
                            name="location"
                            placeholder={this.state.resume.location == null ? "e.g. London, UK" : ""} 
                            defaultValue={this.state.resume.location == null ? "" : this.state.resume.location}
                            style = {styleText}
                            onChange = {this.onChangeDetailsAction}
                        />
                    </div>

                    <div class="form" style = {style2}>
                        <h5>Salary</h5>
                        <input class="" type="text" 
                            name="current_salary"
                            placeholder={this.state.resume.current_salary == null ? "/ Hour" : ""} 
                            defaultValue={this.state.resume.current_salary == null ? "" : this.state.resume.current_salary}
                            style = {styleText}
                            onChange = {this.onChangeDetailsAction}
                        />
                    </div>

                    {/* <div class="form">
                        <h5>Photo <span>(optional)</span></h5>
                        <label class="upload-btn">
                            <input type="file" multiple />
                            <i class="fa fa-upload"></i> Browse
                        </label>
                        <span class="fake-input">No file selected</span>
                    </div>

                    <div class="form">
                        <h5>Video <span>(optional)</span></h5>
                        <input class="search-field" type="text" placeholder="A link to a video about you" defaultValue=""/>
                    </div> */}

                    <div class="form" style={style}>
                        <h5>Resume Content</h5>
                        <textarea class="WYSIWYG" name="summary" cols="40" rows="3" id="summary" spellcheck="true" style = {styleText}></textarea>
                    </div>

                </div>

                </div>
            </div>
        )
    }

    //////////////////////////////////////////////////////////
    /* EDUCATION */
    //////////////////////////////////////////////////////////

    onClickDeleteEducation = (e) => {
        let temp = this.state.educations;
        temp.splice(e.target.id, 1);
        this.setState({
            educations : temp,
        });
    }
    onChangeEducation = (e) => {
        let temp = this.state.educations;
        temp[e.target.id][e.target.name] = e.target.value;
        console.log(temp[e.target.id]);
        this.setState({
            educations : temp
        });
    }

    renderEducation = (education, key) => {
        let styleText = {
            color: "black"
        }
        let styleButton = {
            position: "absolute",
            top: "0",
            right: "0",
            zIndex: "9",
            lineHeight: "32px",
            width: "32px",
            textAlign: "center",
            padding: "0",
            borderRadius: "3px",
            transition: ".2s"
        }
        return(
            
            <div class="form-inside">

                <div class="form boxed box-to-clone education-box">
                    <i id={key}  class="fa fa-close remove" style = {styleButton} onClick = {this.onClickDeleteEducation}></i>
                    <input id={key}
                        name= "instituteOrSchool" 
                        class="search-field" 
                        type="text" 
                        placeholder={education.instituteOrSchool == "" && "School Name"} 
                        value={education.instituteOrSchool} 
                        style = {styleText}
                        onChange = {this.onChangeEducation}
                    />
                    <input id={key}
                        name= "certificateOrDegree" 
                        input={1}
                        class="search-field" 
                        type="text" 
                        placeholder={education.certificateOrDegree == "" && "Qualification(s)"} 
                        value={education.certificateOrDegree} 
                        style = {styleText}
                        onChange = {this.onChangeEducation}    
                    />
                    <input id={key} 
                        name= "startAndEnd" 
                        class="search-field" 
                        type="text" 
                        placeholder={education.startAndEnd == "" && "Start / end date"} 
                        value={education.startAndEnd} 
                        style = {styleText}
                        onChange = {this.onChangeEducation}

                    />
                    <textarea 
                        name="description" 
                        id={key} 
                        cols="30" rows="10" 
                        placeholder="Notes (optional)" 
                        style = {styleText}
                        value = {education.description}
                        onChange = {this.onChangeEducation}
                        >
                    </textarea>

                </div>

            </div>
        )
    }

    onClickAddEducationAction = () => {
        let education = {
            instituteOrSchool: "",
            certificateOrDegree: "",
            startAndEnd: "",
            description: "",
        }
        this.setState({
            educations : [...this.state.educations,education]
        })
    }

    education = () =>{
        
        let styleButton = {
            marginTop : "10px",
            padding: "10px 20px",
            borderRadius: "3px",
            lineHeight: "27px"
        }

        return(
            <div class="dashboard-list-box margin-top-30">
                <h4>Education</h4>
                <div class="dashboard-list-box-content with-padding">
                    {this.state.educations && this.state.educations.map((education, key) => {
                            console.log(key)
                            console.log(education);
                            return(this.renderEducation(education, key))
                    })}

                    <button onClick = {this.onClickAddEducationAction} style = {styleButton}><i class="fa fa-plus-circle"></i> Add Education</button>   
                </div>
            </div>
        )
    }

    //////////////////////////////////////////////////////////
    /* EXPERIECE */
    //////////////////////////////////////////////////////////

    onClickDeleteExperience = (e) => {
        let temp = this.state.experiences;
        temp.splice(e.target.id, 1);
        this.setState({
            experiences : temp,
        });
    }
    onChangeExperience = (e) => {
        let temp = this.state.experiences;
        temp[e.target.id][e.target.name] = e.target.value;
        console.log(temp[e.target.id]);
        this.setState({
            experiences : temp
        });
    }

    renderExperience = (experience, key) => {
        let styleText = {
            color: "black"
        }
        let styleButton = {
            position: "absolute",
            top: "0",
            right: "0",
            zIndex: "9",
            lineHeight: "32px",
            width: "32px",
            textAlign: "center",
            padding: "0",
            borderRadius: "3px",
            transition: ".2s"
        }
        return(
            
            <div class="form-inside">

                <div class="form boxed box-to-clone experience-box">
                    <i id={key}  class="fa fa-close remove" style = {styleButton} onClick = {this.onClickDeleteExperience}></i>
                    <input id={key}
                        name="employer" 
                        class="search-field" 
                        type="text" 
                        placeholder="Employer" 
                        value={experience.employer} 
                        style = {styleText}
                        onChange={this.onChangeExperience}    
                    />
                    <input id={key} 
                        name="jobTitle"
                        class="search-field" 
                        type="text" 
                        placeholder="Job Title" 
                        value={experience.jobTitle} 
                        style = {styleText}
                        onChange={this.onChangeExperience}    
                    />
                    <input id={key} 
                        name="startAndEnd"
                        class="search-field" 
                        type="text" 
                        placeholder="Start / end date" 
                        value={experience.startAndEnd} 
                        style = {styleText}
                        onChange={this.onChangeExperience}    
                    />
                    <textarea id={key} 
                        name="description" 
                        cols="30" rows="10" 
                        placeholder="Notes (optional)" 
                        style = {styleText}
                        value={experience.description}
                        onChange={this.onChangeExperience}    
                        >
                    </textarea>
                </div>

            </div>
        )
    }

    onClickAddExperienceAction = () =>{
        let experience = {
            employer: "",
            jobTitle: "",
            startAndEnd: "",
            description: "",
        }
        this.setState({
            experiences : [...this.state.experiences,experience]
        })

    }

    experience = () => {
        let styleButton = {
            marginTop : "10px",
            padding: "10px 20px",
            borderRadius: "3px",
            lineHeight: "27px"
        }

        return(
            <div class="dashboard-list-box margin-top-30">
                <h4>Experience</h4>
                <div class="dashboard-list-box-content with-padding">
                <div class="form-inside">

                    {this.state.experiences && this.state.experiences.map((experience, key) => {
                        return(this.renderExperience(experience, key))
                    })}

                    <button onClick = {this.onClickAddExperienceAction} style = {styleButton}><i class="fa fa-plus-circle"></i> Add Experience</button>   
                </div>


                </div>
            </div>
        )
    }

    onClickAdd = () =>{
        this.props.actAddResumeRequest(this.state.resume);
        this.setState({
            form: "Edit Resume",
        })
    }

    onClickSave = () =>{
        let _resume = {
            "id": this.state.id,
            "title":this.state.resume["title"],
            "location":this.state.resume["location"],
            "current_salary":this.state.resume["current_salary"],
            "user_id": this.state.resume["user_id"],
        };
        // console.log(_resume.id)
        this.setState({
            resume: _resume,
        })
        console.log(this.state.resume.id)
        this.props.actUpdateResumeRequest(_resume);
        
    }

    table = () => {

        let styleButton = {
            float: "right"
        }

        let button = <button class="button margin-top-30" onClick = {this.onClickSave}><i class="fa fa-save"/> Save</button>
        
        if(this.state.form == "Add Resume"){
            button = <button class="button margin-top-30" onClick = {this.onClickAdd}><i class="fa fa-plus-circle"/> Add</button>

        }

        return(


            <div class="row">
                        
                <div class="col-lg-12 col-md-12">

                    {this.details()}
                    {this.education()}
                    {this.experience()}

                    {button}
                    <Link to="/dashboard/manage-resumes" class="button margin-top-30" style={styleButton}>View <i class="fa fa-arrow-circle-right"></i></Link>
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
const mapDispatchToProps = (dispatch) => {
    return {
        actFetchResumesRequest: () => {
            dispatch(actions.actFetchResumesRequest())
        },
        actDeleteResumeRequest: (id) => {
            dispatch(actions.actDeleteResumeRequest(id))
        },
        actAddResumeRequest: (resume) =>{
            dispatch(actions.actAddResumeRequest(resume))
        },
        actUpdateResumeRequest: (resume) =>{
            dispatch(actions.actUpdateResumeRequest(resume))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddResume);