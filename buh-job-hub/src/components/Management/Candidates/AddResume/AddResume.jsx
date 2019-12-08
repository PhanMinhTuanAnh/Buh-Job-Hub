import React, { Component } from 'react';

export default class AddResume extends Component {
    render() {
        let style = {
            width: "100%",
        }
        return (
            <div>
                <div class="dashboard-content">
                    <div id="titlebar">
                        <div class="row">
                            <div class="col-md-12">
                                <h2>Add Resume</h2>
                                <nav id="breadcrumbs">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Dashboard</a></li>
                                        <li>Add Resume</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        
                        <div class="col-lg-12 col-md-12">

                            <div class="dashboard-list-box margin-top-0">
                                <h4>Details</h4>
                                <div class="dashboard-list-box-content">

                                <div class="submit-page">

                                    <div class="form">
                                        <h5>Your Name</h5>
                                        <input class="search-field" type="text" placeholder="Your full name" value=""/>
                                    </div>

                                    <div class="form">
                                        <h5>Your Email</h5>
                                        <input class="search-field" type="text" placeholder="mail@example.com" value=""/>
                                    </div>

                                    <div class="form">
                                        <h5>Professional Title</h5>
                                        <input class="search-field" type="text" placeholder="e.g. Web Developer" value=""/>
                                    </div>

                                    <div class="form">
                                        <h5>Location</h5>
                                        <input class="search-field" type="text" placeholder="e.g. London, UK" value=""/>
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


                            <a href="#" class="button margin-top-30">Preview <i class="fa fa-arrow-circle-right"></i></a>

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
