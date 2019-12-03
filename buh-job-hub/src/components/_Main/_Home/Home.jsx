import React from 'react';
class Home extends React.Component {
    render() {
        return (
            <>
                {/* Banner
================================================== */}
                <div id="banner" className="with-transparent-header parallax background" style={{ backgroundImage: 'url(images/banner-home-02.jpg)' }} data-img-width={2000} data-img-height={1330} data-diff={300}>
                    <div className="container">
                        <div className="sixteen columns">
                            <div className="search-container">
                                {/* Form */}
                                <h2>Find Job</h2>
                                <input type="text" className="ico-01" placeholder="job title, keywords or company name" defaultValue />
                                <input type="text" className="ico-02" placeholder="city, province or region" defaultValue />
                                <button><i className="fa fa-search" /></button>
                                {/* Browse Jobs */}
                                <div className="browse-jobs">
                                    Browse job offers by <a href="browse-categories.html"> category</a> or <a href="#">location</a>
                                </div>
                                {/* Announce */}
                                {/* 				<div class="announce">
					We’ve over <strong>15 000</strong> job offers for you!
				</div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Content
================================================== */}
                {/* Categories */}
                <div className="container">
                    <div className="sixteen columns">
                        <h3 className="margin-bottom-20 margin-top-10">Popular Categories</h3>
                        {/* Popular Categories */}
                        <div className="categories-boxes-container">
                            {/* Box */}
                            <a href="browse-jobs.html" className="category-small-box">
                                <i className="ln ln-icon-Bar-Chart" />
                                <h4>Accouting / Finance</h4>
                                <span>32</span>
                            </a>
                            {/* Box */}
                            <a href="browse-jobs.html" className="category-small-box">
                                <i className="ln ln-icon-Car" />
                                <h4>Automotive Jobs</h4>
                                <span>76</span>
                            </a>
                            {/* Box */}
                            <a href="browse-jobs.html" className="category-small-box">
                                <i className="ln  ln-icon-Worker" />
                                <h4>Construction / Facilities</h4>
                                <span>31</span>
                            </a>
                            {/* Box */}
                            <a href="browse-jobs.html" className="category-small-box">
                                <i className="ln  ln-icon-Student-Female" />
                                <h4>Education / Training</h4>
                                <span>76</span>
                            </a>
                            {/* Box */}
                            <a href="browse-jobs.html" className="category-small-box">
                                <i className="ln ln-icon-Medical-Sign" />
                                <h4>Healthcare</h4>
                                <span>32</span>
                            </a>
                            {/* Box */}
                            <a href="browse-jobs.html" className="category-small-box">
                                <i className="ln ln-icon-Plates" />
                                <h4>Restarant / Food Service</h4>
                                <span>67</span>
                            </a>
                            {/* Box */}
                            <a href="browse-jobs.html" className="category-small-box">
                                <i className="ln ln-icon-Globe" />
                                <h4>Transportation / Logistics</h4>
                                <span>45</span>
                            </a>
                            {/* Box */}
                            <a href="browse-jobs.html" className="category-small-box">
                                <i className="ln   ln-icon-Laptop-3" />
                                <h4>Telecommunication</h4>
                                <span>96</span>
                            </a>
                        </div>
                        <div className="clearfix" />
                        <div className="margin-top-30" />
                        <a href="browse-categories.html" className="button centered">Browse All Categories</a>
                        <div className="margin-bottom-55" />
                    </div>
                </div>
                <div className="container">
                    {/* Recent Jobs */}
                    <div className="eleven columns">
                        <div className="padding-right">
                            <h3 className="margin-bottom-25">Recent Jobs</h3>
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
                                            <li><i className="ln ln-icon-Map2" /> 7th Avenue, New York, NY, United States</li>
                                            <li><i className="ln ln-icon-Money-2" /> $5000 - $7000</li>
                                            <li>
                                                <div className="listing-date new">new</div>
                                            </li>
                                        </ul>
                                    </div>
                                </a>
                                {/* Listing */}
                                <a href="job-page.html" className="listing part-time">
                                    <div className="listing-logo">
                                        <img src="images/job-list-logo-02.png" alt="" />
                                    </div>
                                    <div className="listing-title">
                                        <h4>Core PHP Developer for Site Maintenance <span className="listing-type">Part-Time</span></h4>
                                        <ul className="listing-icons">
                                            <li><i className="ln ln-icon-Management" /> Cubico</li>
                                            <li><i className="ln ln-icon-Map2" /> Sydney</li>
                                            <li><i className="ln ln-icon-Money-2" /> $125 / hour</li>
                                            <li>
                                                <div className="listing-date">3d ago</div>
                                            </li>
                                        </ul>
                                    </div>
                                </a>
                                {/* Listing */}
                                <a href="job-page-alt.html" className="listing full-time">
                                    <div className="listing-logo">
                                        <img src="images/job-list-logo-01.png" alt="" />
                                    </div>
                                    <div className="listing-title">
                                        <h4>Restaurant Team Member - Crew <span className="listing-type">Full-Time</span></h4>
                                        <ul className="listing-icons">
                                            <li><i className="ln ln-icon-Management" /> King</li>
                                            <li><i className="ln ln-icon-Map2" /> Sydney</li>
                                            <li>
                                                <div className="listing-date">3d ago</div>
                                            </li>
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
                                            <li>
                                                <div className="listing-date">4d ago</div>
                                            </li>
                                        </ul>
                                    </div>
                                </a>
                                {/* Listing */}
                                <a href="job-page.html" className="listing freelance">
                                    <div className="listing-logo">
                                        <img src="images/job-list-logo-05.png" alt="" />
                                    </div>
                                    <div className="listing-title">
                                        <h4>iPhone / Android Music App Development <span className="listing-type">Freelance</span></h4>
                                        <ul className="listing-icons">
                                            <li><i className="ln ln-icon-Management" /> Hexagon</li>
                                            <li><i className="ln ln-icon-Map2" /> London</li>
                                            <li><i className="ln ln-icon-Money-2" /> $85 / hour</li>
                                            <li>
                                                <div className="listing-date">4d ago</div>
                                            </li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                            <a href="browse-jobs.html" className="button centered"><i className="fa fa-plus-circle" /> Show More Jobs</a>
                            <div className="margin-bottom-55" />
                        </div>
                    </div>
                    {/* Job Spotlight */}
                    <div className="five columns">
                        <h3 className="margin-bottom-5">Job Spotlight</h3>
                        {/* Navigation */}
                        <div className="showbiz-navigation">
                            <div id="showbiz_left_1" className="sb-navigation-left"><i className="fa fa-angle-left" /></div>
                            <div id="showbiz_right_1" className="sb-navigation-right"><i className="fa fa-angle-right" /></div>
                        </div>
                        <div className="clearfix" />
                        {/* Showbiz Container */}
                        <div id="job-spotlight" className="showbiz-container">
                            <div className="showbiz" data-left="#showbiz_left_1" data-right="#showbiz_right_1" data-play="#showbiz_play_1">
                                <div className="overflowholder">
                                    <ul>
                                        <li>
                                            <div className="job-spotlight">
                                                <a href="#">
                                                    <h4>Social Media: Advertising Coordinator <span className="part-time">Part-Time</span></h4>
                                                </a>
                                                <span><i className="fa fa-briefcase" /> Mates</span>
                                                <span><i className="fa fa-map-marker" /> New York</span>
                                                <span><i className="fa fa-money" /> $20 / hour</span>
                                                <p>As advertising &amp; content coordinator, you will support our social media team in producing high quality social content for a range of media channels.</p>
                                                <a href="job-page.html" className="button">Apply For This Job</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="job-spotlight">
                                                <a href="#">
                                                    <h4>Prestashop / WooCommerce Product Listing <span className="freelance">Freelance</span></h4>
                                                </a>
                                                <span><i className="fa fa-briefcase" /> King</span>
                                                <span><i className="fa fa-map-marker" /> London</span>
                                                <span><i className="fa fa-money" /> $25 / hour</span>
                                                <p>Etiam suscipit tellus ante, sit amet hendrerit magna varius in. Pellentesque lorem quis enim venenatis pellentesque.</p>
                                                <a href="job-page.html" className="button">Apply For This Job</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="job-spotlight">
                                                <a href="#">
                                                    <h4>Logo Design <span className="freelance">Freelance</span></h4>
                                                </a>
                                                <span><i className="fa fa-briefcase" /> Hexagon</span>
                                                <span><i className="fa fa-map-marker" /> Sydney</span>
                                                <span><i className="fa fa-money" /> $10 / hour</span>
                                                <p>Proin ligula neque, pretium et ipsum eget, mattis commodo dolor. Etiam tincidunt libero quis commodo.</p>
                                                <a href="job-page.html" className="button">Apply For This Job</a>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="clearfix" />
                                </div>
                                <div className="clearfix" />
                            </div>
                        </div>
                    </div>
                </div>
                <section className="fullwidth-testimonial margin-top-15">
                    {/* Info Section */}
                    <div className="container">
                        <div className="sixteen columns">
                            <h3 className="headline centered">
                                What Our Users Say 😍
                <span className="margin-top-25">We collect reviews from our users so you can get an honest opinion of what an experience with our website are really like!</span>
                            </h3>
                        </div>
                    </div>
                    {/* Info Section / End */}
                    {/* Testimonials Carousel */}
                    <div className="fullwidth-carousel-container margin-top-20">
                        <div className="testimonial-carousel testimonials">
                            {/* Item */}
                            <div className="fw-carousel-review">
                                <div className="testimonial-box">
                                    <div className="testimonial">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close.</div>
                                </div>
                                <div className="testimonial-author">
                                    <img src="images/resumes-list-avatar-03.png" alt="" />
                                    <h4>Tom Baker <span>HR Specialist</span></h4>
                                </div>
                            </div>
                            {/* Item */}
                            <div className="fw-carousel-review">
                                <div className="testimonial-box">
                                    <div className="testimonial">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation is on the runway heading towards a streamlined cloud content.</div>
                                </div>
                                <div className="testimonial-author">
                                    <img src="images/resumes-list-avatar-02.png" alt="" />
                                    <h4>Jennie Smith <span>Jobseeker</span></h4>
                                </div>
                            </div>
                            {/* Item */}
                            <div className="fw-carousel-review">
                                <div className="testimonial-box">
                                    <div className="testimonial">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic
                    world view.</div>
                                </div>
                                <div className="testimonial-author">
                                    <img src="images/resumes-list-avatar-01.png" alt="" />
                                    <h4>Jack Paden <span>Jobseeker</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Testimonials Carousel / End */}
                </section>
                {/* Flip banner */}
                <a href="browse-jobs.html" className="flip-banner margin-bottom-55" data-background="images/all-categories-photo.jpg" data-color="#26ae61" data-color-opacity="0.93">
                    <div className="flip-banner-content">
                        <h2 className="flip-visible">Step inside and see for yourself!</h2>
                        <h2 className="flip-hidden">Get Started <i className="fa fa-angle-right" /></h2>
                    </div>
                </a>
                {/* Flip banner / End */}
                {/* Recent Posts */}
                <div className="container">
                    <div className="sixteen columns">
                        <h3 className="margin-bottom-25">Recent Posts</h3>
                    </div>
                    <div className="one-third column">
                        {/* Post #1 */}
                        <div className="recent-post">
                            <div className="recent-post-img"><a href="blog-single-post.html"><img src="images/recent-post-01.jpg" alt="" /></a>
                                <div className="hover-icon" />
                            </div>
                            <a href="blog-single-post.html">
                                <h4>Hey Job Seeker, It’s Time To Get Up And Get Hired</h4>
                            </a>
                            <div className="meta-tags">
                                <span>October 10, 2015</span>
                                <span><a href="#">0 Comments</a></span>
                            </div>
                            <p>The world of job seeking can be all consuming. From secretly stalking the open reqs page of your dream company to sending endless applications.</p>
                            <a href="blog-single-post.html" className="button">Read More</a>
                        </div>
                    </div>
                    <div className="one-third column">
                        {/* Post #2 */}
                        <div className="recent-post">
                            <div className="recent-post-img"><a href="blog-single-post.html"><img src="images/recent-post-02.jpg" alt="" /></a>
                                <div className="hover-icon" />
                            </div>
                            <a href="blog-single-post.html">
                                <h4>How to "Woo" a Recruiter and Land Your Dream Job</h4>
                            </a>
                            <div className="meta-tags">
                                <span>September 12, 2015</span>
                                <span><a href="#">0 Comments</a></span>
                            </div>
                            <p>Struggling to find your significant other the perfect Valentine’s Day gift? If I may make a suggestion: woo a recruiter. </p>
                            <a href="blog-single-post.html" className="button">Read More</a>
                        </div>
                    </div>
                    <div className="one-third column">
                        {/* Post #3 */}
                        <div className="recent-post">
                            <div className="recent-post-img"><a href="blog-single-post.html"><img src="images/recent-post-03.jpg" alt="" /></a>
                                <div className="hover-icon" />
                            </div>
                            <a href="blog-single-post.html">
                                <h4>11 Tips to Help You Get New Clients Through Cold Calling</h4>
                            </a>
                            <div className="meta-tags">
                                <span>August 27, 2015</span>
                                <span><a href="#">0 Comments</a></span>
                            </div>
                            <p>If your dream employer appears on this list, you’re certainly in good company. But it also means you’re up for some intense competition.</p>
                            <a href="blog-single-post.html" className="button">Read More</a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Home;
