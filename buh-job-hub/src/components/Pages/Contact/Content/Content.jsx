import React, { Component } from 'react'
import OurOffice from './OurOffice/OurOffice'
import ContactForm from './ContactForm/ContactForm'
import Information from './Information/Information'
export default class Content extends Component {
    render() {
        return (
            <div className="container">
                <OurOffice />
                <div className="container">
                    <ContactForm />
                    <Information/>
                </div>

            </div>
        );
    }
}



