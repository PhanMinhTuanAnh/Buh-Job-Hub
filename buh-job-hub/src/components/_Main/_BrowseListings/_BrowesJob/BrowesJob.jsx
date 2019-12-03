import React from 'react';
class BrowesJob extends React.Component {
    render() {
        return (
            <div>
                <div className="clearfix" />
                {/* Titlebar
      ================================================== */}
                <div id="titlebar">
                    <div className="container">
                        <div className="ten columns">
                            <span>We found 1,412 jobs matching:</span>
                            <h2>Web, Software &amp; IT</h2>
                        </div>
                        <div className="six columns">
                            <a href="dashboard-add-job.html" className="button">Post a Job, It’s Free!</a>
                        </div>
                    </div>
                </div>
                {/* Content
      ================================================== */}
                <div className="container">
                    {/* Recent Jobs */}
                    <div className="eleven columns">
                        <div className="padding-right">
                            <div className="listings-container">
                                {/* Listing */}
                                <a href="job-page-alt.html" className="listing full-time">
                                    <div className="listing-logo">
                                        <img src="images/job-list-logo-01.png" alt="" />
                                    </div>
                                    <div className="listing-title">
                                        <h4>Marketing Coordinator - SEO / SEM Experience <span className="listing-type">Full-Time</span></h4>
                                        <ul className="listing-icons">
                                            <li><i className="ln ln-icon-Management" /> King</li>
                                            <li><i className="ln ln-icon-Map2" /> Sydney</li>
                                            <li><i className="ln ln-icon-Money-2" /> $5000 - $7000</li>
                                            <li><div className="listing-date new">new</div></li>
                                        </ul>
                                    </div>
                                </a>
                                {/* Listing */}
                                <a href="job-page.html" className="listing part-time">
                                    <div className="listing-logo">
                                        <img src="images/job-list-logo-02.png" alt="" />
                                    </div>
                                    <div className="listing-title">
                                        <h4>Core PHP Developer for Site Maintenance  <span className="listing-type">Part-Time</span></h4>
                                        <ul className="listing-icons">
                                            <li><i className="ln ln-icon-Management" /> Cubico</li>
                                            <li><i className="ln ln-icon-Map2" /> Sydney</li>
                                            <li><i className="ln ln-icon-Money-2" /> $125 / hour</li>
                                            <li><div className="listing-date">3d ago</div></li>
                                        </ul>
                                    </div>
                                </a>
                                {/* Listing */}
                                <a href="job-page-alt.html" className="listing full-time">
                                    <div className="listing-logo">
                                        <img src="images/job-list-logo-01.png" alt="" />
                                    </div>
                                    <div className="listing-title">
                                        <h4>Restaurant Team Member - Crew  <span className="listing-type">Full-Time</span></h4>
                                        <ul className="listing-icons">
                                            <li><i className="ln ln-icon-Management" /> King</li>
                                            <li><i className="ln ln-icon-Map2" /> Sydney</li>
                                            <li><div className="listing-date">3d ago</div></li>
                                        </ul>
                                    </div>
                                </a>
                                {/* Listing */}
                                <a href="job-page.html" className="listing internship">
                                    <div className="listing-logo">
                                        <img src="images/job-list-logo-04.png" alt="" />
                                    </div>
                                    <div className="listing-title">
                                        <h4>Power Systems User Experience Designer <span className="listing-type">Internship</span></h4>
                                        <ul className="listing-icons">
                                            <li><i className="ln ln-icon-Management" /> Hexagon</li>
                                            <li><i className="ln ln-icon-Map2" /> London</li>
                                            <li><i className="ln ln-icon-Money-2" /> $55 / hour</li>
                                            <li><div className="listing-date">4d ago</div></li>
                                        </ul>
                                    </div>
                                </a>
                                {/* Listing */}
                                <a href="job-page.html" className="listing freelance">
                                    <div className="listing-logo">
                                        <img src="images/job-list-logo-05.png" alt="" />
                                    </div>
                                    <div className="listing-title">
                                        <h4>iPhone / Android Music App Development  <span className="listing-type">Freelance</span></h4>
                                        <ul className="listing-icons">
                                            <li><i className="ln ln-icon-Management" /> Hexagon</li>
                                            <li><i className="ln ln-icon-Map2" /> London</li>
                                            <li><i className="ln ln-icon-Money-2" /> $85 / hour</li>
                                            <li><div className="listing-date">4d ago</div></li>
                                        </ul>
                                    </div>
                                </a>
                                {/* Listing */}
                                <a href="job-page.html" className="listing part-time featured">
                                    <div className="listing-logo">
                                        <img src="images/job-list-logo-02.png" alt="" />
                                    </div>
                                    <div className="listing-title">
                                        <h4>Core PHP Developer for Site Maintenance  <span className="listing-type">Part-Time</span></h4>
                                        <ul className="listing-icons">
                                            <li><i className="ln ln-icon-Management" /> Cubico</li>
                                            <li><i className="ln ln-icon-Map2" /> Sydney</li>
                                            <li><i className="ln ln-icon-Money-2" /> $125 / hour</li>
                                            <li><div className="listing-date">3d ago</div></li>
                                        </ul>
                                    </div>
                                </a>
                                {/* Listing */}
                                <a href="job-page.html" className="listing full-time">
                                    <div className="listing-logo">
                                        <img src="images/job-list-logo-01.png" alt="" />
                                    </div>
                                    <div className="listing-title">
                                        <h4>Restaurant Team Member - Crew <span className="listing-type">Full-Time</span></h4>
                                        <ul className="listing-icons">
                                            <li><i className="ln ln-icon-Management" /> King</li>
                                            <li><i className="ln ln-icon-Map2" /> Sydney</li>
                                            <li><div className="listing-date">3d ago</div></li>
                                        </ul>
                                    </div>
                                </a>
                                {/* Listing */}
                                <a href="job-page.html" className="listing full-time">
                                    <div className="listing-logo">
                                        <img src="images/job-list-logo-04.png" alt="" />
                                    </div>
                                    <div className="listing-title">
                                        <h4>Power Systems User Experience Designer <span className="listing-type">Full-Time</span></h4>
                                        <ul className="listing-icons">
                                            <li><i className="ln ln-icon-Management" /> Hexagon</li>
                                            <li><i className="ln ln-icon-Map2" /> London</li>
                                            <li><i className="ln ln-icon-Money-2" /> $55 / hour</li>
                                            <li><div className="listing-date">4d ago</div></li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                            <div className="clearfix" />
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
                        </div>
                    </div>
                    {/* Widgets */}
                    <div className="five columns">
                        {/* Sort by */}
                        <div className="widget">
                            <h4>Sort by</h4>
                            {/* Select */}
                            <select data-placeholder="Choose Category" className="chosen-select-no-single">
                                <option selected="selected" value="recent">Newest</option>
                                <option value="oldest">Oldest</option>
                                <option value="expiry">Expiring Soon</option>
                                <option value="ratehigh">Hourly Rate – Highest First</option>
                                <option value="ratelow">Hourly Rate – Lowest First</option>
                            </select>
                        </div>
                        {/* Location */}
                        <div className="widget">
                            <h4>Location</h4>
                            <form action="#" method="get">
                                <input type="text" placeholder="State / Province" defaultValue />
                                <input type="text" placeholder="City" defaultValue />
                                <input type="text" className="miles" placeholder="Miles" defaultValue />
                                <label htmlFor="zip-code" className="from">from</label>
                                <input type="text" id="zip-code" className="zip-code" placeholder="Zip-Code" defaultValue /><br />
                                <button className="button">Filter</button>
                            </form>
                        </div>
                        {/* Job Type */}
                        <div className="widget">
                            <h4>Job Type</h4>
                            <ul className="checkboxes">
                                <li>
                                    <input id="check-1" type="checkbox" name="check" defaultValue="check-1" defaultChecked />
                                    <label htmlFor="check-1">Any Type</label>
                                </li>
                                <li>
                                    <input id="check-2" type="checkbox" name="check" defaultValue="check-2" />
                                    <label htmlFor="check-2">Full-Time <span>(312)</span></label>
                                </li>
                                <li>
                                    <input id="check-3" type="checkbox" name="check" defaultValue="check-3" />
                                    <label htmlFor="check-3">Part-Time <span>(269)</span></label>
                                </li>
                                <li>
                                    <input id="check-4" type="checkbox" name="check" defaultValue="check-4" />
                                    <label htmlFor="check-4">Internship <span>(46)</span></label>
                                </li>
                                <li>
                                    <input id="check-5" type="checkbox" name="check" defaultValue="check-5" />
                                    <label htmlFor="check-5">Freelance <span>(119)</span></label>
                                </li>
                            </ul>
                        </div>
                        {/* Rate/Hr */}
                        <div className="widget">
                            <h4>Rate / Hr</h4>
                            <ul className="checkboxes">
                                <li>
                                    <input id="check-6" type="checkbox" name="check" defaultValue="check-6" defaultChecked />
                                    <label htmlFor="check-6">Any Rate</label>
                                </li>
                                <li>
                                    <input id="check-7" type="checkbox" name="check" defaultValue="check-7" />
                                    <label htmlFor="check-7">$0 - $25 <span>(231)</span></label>
                                </li>
                                <li>
                                    <input id="check-8" type="checkbox" name="check" defaultValue="check-8" />
                                    <label htmlFor="check-8">$25 - $50 <span>(297)</span></label>
                                </li>
                                <li>
                                    <input id="check-9" type="checkbox" name="check" defaultValue="check-9" />
                                    <label htmlFor="check-9">$50 - $100 <span>(78)</span></label>
                                </li>
                                <li>
                                    <input id="check-10" type="checkbox" name="check" defaultValue="check-10" />
                                    <label htmlFor="check-10">$100 - $200 <span>(98)</span></label>
                                </li>
                                <li>
                                    <input id="check-11" type="checkbox" name="check" defaultValue="check-11" />
                                    <label htmlFor="check-11">$200+ <span>(21)</span></label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Widgets / End */}
                </div>
            </div>
        );
    }
}
export default BrowesJob;
