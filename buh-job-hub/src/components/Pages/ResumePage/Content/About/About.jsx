import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="eight columns">
                <div className="padding-right">
                    <h3 className="margin-bottom-15">About Me</h3>
                    <p className="margin-reset">
                        The Food Service Specialist ensures outstanding customer service is provided to food customers and that all food offerings meet the required stock levels and presentation standards. Beginning your career as a Food Steward will give you a strong foundation in Speedway’s food segment that can make you a vital member of the front line team!
              </p>
                    <br />
                    <p>The <strong>Food Service Specialist</strong> will have responsibilities that include:</p>
                    <ul className="list-1">
                        <li>Excellent customer service skills, communication skills, and a happy, smiling attitude are essential.</li>
                        <li>Must be available to work required shifts including weekends, evenings and holidays.</li>
                        <li>Must be able to perform repeated bending, standing and reaching.</li>
                        <li>Must be able to occasionally lift up to 50 pounds</li>
                    </ul>
                </div>
            </div>

        );
    }
}
