import React, { Component } from 'react'

export default class OurOffice extends Component {
    render() {
        return (
            <div className="container">
                <div className="sixteen columns">
                    <h3 className="margin-bottom-20">Our Office</h3>
                    {/* Google Maps */}
                    <section className="google-map-container">
                        <div id="googlemaps" className="google-map google-map-full" />
                    </section>
                </div>
            </div>
        );
    }
}



