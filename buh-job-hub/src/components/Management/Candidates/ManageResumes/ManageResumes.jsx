import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../../react-redux/index_actions';
import { Link } from 'react-router-dom';
import ResumesTable from './ResumesTable(Container)/ResumesTable';


export default class ManageResumes extends Component {

    render() {
        return (
            <div>
                <div className="dashboard-content">

                <div id="titlebar">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Manage Resumes</h2>
                            <nav id="breadcrumbs">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/dashboard">Dashboard</Link></li>
                                    <li>Manage Resumes</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                    
                <ResumesTable />

                </div>
            </div>
        )
    }
}
