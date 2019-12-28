import React, { Component } from 'react'
import { connect } from 'react-redux'
class CompanyInfo extends Component {
    render() {
        var {job_page} = this.props
        return (
            <>
                <div className="company-info">
                    <img src= {job_page.company ? (job_page.company.image[0]?job_page.company.image[0].company_image : "https://cdn2.iconfinder.com/data/icons/flat-business-icon/600/shares-company-finance-512.png") : "https://cdn2.iconfinder.com/data/icons/flat-business-icon/600/shares-company-finance-512.png"} alt="" />
                    <div className="content">
                        <h4>{job_page.company? job_page.company.company.company_name : ""}</h4>
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
const mapStateToProps = (state) => {
    return {
      job_page: state.job_page,
    }
  }
  export default connect(mapStateToProps, null)(CompanyInfo);

