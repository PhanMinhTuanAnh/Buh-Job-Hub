import React, { Component } from 'react'

export default class ContactForm extends Component {
    render() {
        return (
            <div className="five columns">
                {/* Information */}
                <h3 className="margin-bottom-10">Information</h3>
                <div className="widget-box">
                    <p>Morbi eros bibendum lorem ipsum dolor pellentesque pellentesque bibendum. </p>
                    <ul className="contact-informations">
                        <li>45 Park Avenue, Apt. 303</li>
                        <li>New York, NY 10016 </li>
                    </ul>
                    <ul className="contact-informations second">
                        <li><i className="fa fa-phone" /> <p>+48 880 440 110</p></li>
                        <li><i className="fa fa-envelope" /> <p><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="1f727e76735f7a677e726f737a317c7072">[email&nbsp;protected]</a></p></li>
                        <li><i className="fa fa-globe" /> <p>www.example.com</p></li>
                    </ul>
                </div>
                {/* Social */}
                <div className="widget margin-top-30">
                    <h3 className="margin-bottom-5">Social Media</h3>
                    <ul className="social-icons">
                        <li><a className="facebook" href="#"><i className="icon-facebook" /></a></li>
                        <li><a className="twitter" href="#"><i className="icon-twitter" /></a></li>
                        <li><a className="gplus" href="#"><i className="icon-gplus" /></a></li>
                        <li><a className="linkedin" href="#"><i className="icon-linkedin" /></a></li>
                    </ul>
                    <div className="clearfix" />
                    <div className="margin-bottom-50" />
                </div>
            </div>
        );
    }
}



