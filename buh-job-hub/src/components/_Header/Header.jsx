import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../../react-redux/Account(Ex)/account_actions'
class Header extends React.Component {

    handleClick = event => {
        event.preventDefault();
        localStorage.removeItem('token');
        this.props.logoutUser();
    }
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
                                    <li><a href="#">Pages</a>
                                        <ul>
                                            <li ><Link to="/job-page">Job Page</Link></li>
                                            <li><a href="job-page-alt.html">Job Page Alternative</a></li>
                                            <li><Link to="/resume-page">Resume Page</Link></li>
                                            <li><a href="shortcodes.html">Shortcodes</a></li>
                                            <li><a href="icons.html">Icons</a></li>
                                            <li><a href="pricing-tables.html">Pricing Tables</a></li>
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><Link to="/contact-page">Contact</Link></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Browse Listings</a>
                                        <ul>
                                            <li><Link to="/browse-jobs">Browse Jobs</Link></li>
                                            <li><Link to="browse-resumes">Browse Resumes</Link></li>
                                            <li><Link to="browse-categories">Browse Categories</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="dashboard">Dashboard</Link></li>
                                </ul>
                                <ul className="float-right">
                                    {!localStorage.getItem("token") && 
                                    <>
                                    
                                    <li><Link to="/account"><i className="fa fa-user" /> Sign Up</Link></li>
                                    <li><Link to="/account"><i className="fa fa-lock" /> Log In</Link></li>
                                    </>
                                    }  
                                    
                                    {localStorage.getItem("token")
                                            ?
                                            <>
                                            <button onClick={this.handleClick}>Log Out</button>
                                            </>
                                            : null
                            
                                    }
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
const mapStateToProps = state => ({
    currentUser: state.login_reducer.currentUser
  })
const mapDispatchToProps = dispatch => ({
    //getProfileFetch: () => dispatch(getProfileFetch()),
    logoutUser: () => dispatch(logoutUser())
  })
  export default connect(mapStateToProps, mapDispatchToProps)(Header); 