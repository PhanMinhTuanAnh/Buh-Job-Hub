import React, { Component } from 'react'
import * as actions from '../../../../react-redux/index_actions';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class TitleBar extends Component {
  componentDidMount(){
    this.props.actFetchResumesRequest();
  }
  render() {
    let _resume;
    this.props.resumes.map((resume, key) => {
      if(resume.id == this.props.id)
        _resume = resume
      else return null;
    })
    console.log(_resume)
    return (
      <div id="titlebar" className="resume">
        <div className="container">
          <div className="ten columns">
            <div className="resume-titlebar">
              <img src={_resume.user_image} alt="" />
              <div className="resumes-list-content">
              <h4>{_resume.user_name} <span>{_resume.title}</span></h4>
              <span className="icons"><i className="fa fa-map-marker" /> {_resume.location}</span>
                <span className="icons"><i className="fa fa-money" /> ${_resume.current_salary} / hour</span><br/>
                <span className="icons"><a href="/cdn-cgi/l/email-protection#503a3f383e7e343f35103528313d203c357e333f3d"><i className="fa fa-envelope" /> <span className="__cf_email__" data-cfemail="402a2f282e6e242f25002538212d302c256e232f2d">{_resume.user_email}</span></a></span>
                <div className="skills">
                  <span>JavaScript</span>
                  <span>PHP</span>
                  <span>WordPress</span>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
          <div className="six columns">
            <div className="two-buttons">
              <a href="#small-dialog" className="popup-with-zoom-anim button"><i className="fa fa-envelope" /> Send Message</a>
              <div id="small-dialog" className="zoom-anim-dialog mfp-hide apply-popup">
                <div className="small-dialog-headline">
                  <h2>Send Message to John Doe</h2>
                </div>
                <div className="small-dialog-content">
                  <form action="#" method="get">
                    <input type="text" placeholder="Full Name" />
                    <input type="text" placeholder="Email Address" />
                    <textarea placeholder="Message" defaultValue={""} />
                    <button className="send">Send Application</button>
                  </form>
                </div>
              </div>
              <a href="#" className="button dark"><i className="fa fa-star" /> Bookmark This Resume</a>
            </div>
          </div>
        </div>
      </div>
    );
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
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TitleBar);