import React, { Component } from 'react'
import JobRequirment from './JobRequirment/JobRequirment'
import CompanyInfo from './CompanyInfo/CompanyInfo';
import Widgets from './Widgets/Widgets';
export default class Content extends Component {
    render() {
        return (
            <div className="container">
                <div class="eleven columns">
                    <div class="padding-right">
                        <CompanyInfo />
                        <JobRequirment />
                    </div>
                </div>
                <Widgets />
            </div>
        );
    }
}
