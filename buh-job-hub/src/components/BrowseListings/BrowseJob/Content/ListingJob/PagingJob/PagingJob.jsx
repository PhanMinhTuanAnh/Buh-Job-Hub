import React, { Component } from 'react'

export default class PagingJob extends Component {
    render() {
        return (
            <div className="pagination-container">
                <nav className="pagination">
                    <ul>
                        <li><a href="#" className="current-page">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li className="blank">...</li>
                        <li><a href="#">22</a></li>
                    </ul>
                </nav>
                <nav className="pagination-next-prev">
                    <ul>
                        <li><a href="#" className="prev">Previous</a></li>
                        <li><a href="#" className="next">Next</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
