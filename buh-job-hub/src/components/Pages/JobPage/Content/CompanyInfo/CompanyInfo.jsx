import React, { Component } from 'react'

export default class CompanyInfo extends Component {
    render() {
        return (
            <>
                <div className="company-info">
                    <img src={require('./../../../.../../../../assets/images/company-logo.png')} alt="" />
                    <div className="content">
                        <h4>King LLC</h4>
                        <span><a href="#"><i className="fa fa-link" /> Website</a></span>
                        <span><a href="#"><i className="fa fa-twitter" /> @kingrestaurants</a></span>
                    </div>
                    <div className="clearfix" />
                </div>
                <p className="margin-reset">
                    The Food Service Specialist ensures outstanding customer service is provided to food customers and that all food offerings meet the required stock levels and presentation standards. Beginning your career as a Food Steward will give you a strong foundation in Speedway’s food segment that can make you a vital member of the front line team!
      </p>
                <br />
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
            </>
        );
    }
}
