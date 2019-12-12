import React from 'react';
import {Link, NavLink} from 'react-router-dom'
class Header extends React.Component {
    render() {
        let style = {
            background : "#202020",
            borderRadius : "3px"
        }
        return (
            <>
                <header className="sticky-header">
                    <div className="container">
                        <div className="sixteen columns">
                            <div id="logo">
                                <h1><Link to="/"><img src={require('../../assets/images/logo2.png')} alt="Work Scout" style={style}/></Link></h1>
                            </div>
                            <nav id="navigation" className="menu">
                                <ul id="responsive">
                                    <li><NavLink to="/browse-jobs" activeClassName="selected">Jobs</NavLink></li>
                                    <li><Link to="browse-resumes">Resumes</Link></li>
                                    <li><Link to="dashboard">Dashboard</Link></li>
                                </ul>
                                <ul className="float-right">
                                    <li><Link to="/signup"><i className="fa fa-user" /> Sign Up</Link></li>
                                    <li><Link to="/signin"><i className="fa fa-lock" /> Log In</Link></li>
                                </ul>
                            </nav>
                            <div id="mobile-navigation">
                                <a href="#menu" className="menu-trigger"><i className="fa fa-reorder" /></a>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}
export default Header;