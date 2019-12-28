import React, { Component } from 'react'
import { connect } from 'react-redux'
class TitleBar extends Component {
    render() {
        var {job_page} = this.props
        return (
            <div id="titlebar" className="photo-bg" style={{ background: 'url(images/job-page-photo.jpg)' }}>
                <div className="container">
                    <div className="ten columns">
                        {/* <span><a href="browse-jobs.html">Restaurant / Food Service</a></span> */}
                        <h2>{job_page.job_description? job_page.job_description.job_description : "" }
                        <span className={this.showCss(job_page.type?job_page.type.job_type: "")}>{job_page.type?job_page.type.job_type: ""}</span></h2>
                    </div>
                    <div className="six columns">
                        <a href="#" className="button white"><i className="fa fa-star" /> Bookmark This Job</a>
                    </div>
                </div>
            </div>
        );
        
    }
    showCss=(str)=>{
        if(str == 'Freelance') return 'freelance'
        else if(str == 'Full-time') return 'full-time'
        else if(str == 'Part-time') return 'part-time'
        else if(str == 'Internship') return 'internship'
        else return 'temporary'
    }
}
const mapStateToProps = (state) => {
    return {
      job_page: state.job_page,
    }
  }
  export default connect(mapStateToProps, null)(TitleBar);