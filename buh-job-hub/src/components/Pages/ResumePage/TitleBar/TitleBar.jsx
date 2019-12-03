import React, { Component } from 'react'

export default class TitleBar extends Component {
    render() {
        return (
            <div id="titlebar" className="resume">
          <div className="container">
            <div className="ten columns">
              <div className="resume-titlebar">
                <img src="images/resumes-list-avatar-01.png" alt="" />
                <div className="resumes-list-content">
                  <h4>John Doe <span>UX/UI Graphic Designer</span></h4>
                  <span className="icons"><i className="fa fa-map-marker" /> Mountain View, CA</span>
                  <span className="icons"><i className="fa fa-money" /> $100 / hour</span>
                  <span className="icons"><a href="#"><i className="fa fa-link" /> Website</a></span>
                  <span className="icons"><a href="/cdn-cgi/l/email-protection#503a3f383e7e343f35103528313d203c357e333f3d"><i className="fa fa-envelope" /> <span className="__cf_email__" data-cfemail="402a2f282e6e242f25002538212d302c256e232f2d">[email&nbsp;protected]</span></a></span>
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
                      <input type="text" placeholder="Full Name" defaultValue />
                      <input type="text" placeholder="Email Address" defaultValue />
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
