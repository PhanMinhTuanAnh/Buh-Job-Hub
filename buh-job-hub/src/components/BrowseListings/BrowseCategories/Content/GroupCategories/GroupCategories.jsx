import React, { Component } from 'react'

export default class GroupCategories extends Component {
    render() {
        return (
            <div className="categories-group">
                <div className="container">
                    <div className="four columns"><h4>Web, Software &amp; IT</h4></div>
                    <div className="four columns">
                        <ul>
                            <li><a href="#">PHP</a></li>
                            <li><a href="#">Android</a></li>
                            <li><a href="#">WordPress</a></li>
                            <li><a href="#">Design</a></li>
                            <li><a href="#">Developer</a></li>
                            <li><a href="#">iOS</a></li>
                            <li><a href="#">Mobile</a></li>
                        </ul>
                    </div>
                    <div className="four columns">
                        <ul>
                            <li><a href="#">MySQL</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li><a href="#">Software</a></li>
                            <li><a href="#">Website Design</a></li>
                            <li><a href="#">Programming</a></li>
                            <li><a href="#">SEO</a></li>
                            <li><a href="#">Java</a></li>
                        </ul>
                    </div>
                    <div className="four columns">
                        <ul>
                            <li><a href="#">CSS</a></li>
                            <li><a href="#">HTML5</a></li>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">eCommerce</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
