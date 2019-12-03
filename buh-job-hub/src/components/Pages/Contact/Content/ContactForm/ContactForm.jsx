import React, { Component } from 'react'

export default class ContactForm extends Component {
    render() {
        return (
            <div className="eleven columns">
                <h3 className="margin-bottom-15">Contact Form</h3>
                {/* Contact Form */}
                <section id="contact" className="padding-right">
                    {/* Success Message */}
                    <mark id="message" />
                    {/* Form */}
                    <form method="post" name="contactform" id="contactform">
                        <fieldset>
                            <div>
                                <label>Name:</label>
                                <input name="name" type="text" id="name" />
                            </div>
                            <div>
                                <label>Email: <span>*</span></label>
                                <input name="email" type="email" id="email" pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$" />
                            </div>
                            <div>
                                <label>Message: <span>*</span></label>
                                <textarea name="comment" cols={40} rows={3} id="comment" spellCheck="true" defaultValue={""} />
                            </div>
                        </fieldset>
                        <div id="result" />
                        <input type="submit" className="submit" id="submit" defaultValue="Send Message" />
                        <div className="clearfix" />
                        <div className="margin-bottom-40" />
                    </form>
                </section>
            </div>
        );
    }
}



