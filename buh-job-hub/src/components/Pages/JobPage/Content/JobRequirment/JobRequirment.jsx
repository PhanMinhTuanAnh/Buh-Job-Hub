import React, { Component } from 'react'

export default class Content extends Component {
    render() {
        return (
            <>
                <p>The <strong>Food Service Specialist</strong> will have responsibilities that include:</p>
                <ul className="list-1">
                    <li>Executing the Food Service program, including preparing and presenting our wonderful food offerings
                      to hungry customers on the go!
                </li>
                    <li>Greeting customers in a friendly manner and suggestive selling and sampling items to help increase sales.</li>
                    <li>Keeping our Store food area looking terrific and ready for our valued customers by managing product
                  inventory, stocking, cleaning, etc.</li>
                    <li>We’re looking for associates who enjoy interacting with people and working in a fast-paced environment!</li>
                </ul>
                <br />
                <h4 className="margin-bottom-10">Job Requirment</h4>
                <ul className="list-1">
                    <li>Excellent customer service skills, communication skills, and a happy, smiling attitude are essential.</li>
                    <li>Must be available to work required shifts including weekends, evenings and holidays.</li>
                    <li>Must be able to perform repeated bending, standing and reaching.</li>
                    <li> Must be able to occasionally lift up to 50 pounds</li>
                </ul>
            </>
        );
    }
}
