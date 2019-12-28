import React from 'react';
import {connect} from 'react-redux'
import {Link, NavLink,withRouter } from 'react-router-dom'
import {logoutUser} from '../../react-redux/Account(Ex)/account_actions'
class Header extends React.Component {
    handleClick = event => {
        event.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.props.logoutUser();
        this.props.history.push('/');
    }
    render() {
        console.log("props",this.props)
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
                                    {localStorage.getItem("token")
                                            ?
                                            <>
                                            <li><Link to="/dashboard">Dashboard</Link></li>
                                            </>
                                            : null                          
                                    }
                                </ul>
                                <ul className="float-right">
                                    {!localStorage.getItem("token")&&
                                    <>
                                    
                                    <li><Link to="/signup"><i className="fa fa-user" /> Sign Up</Link></li>
                                    <li><Link to="/signin"><i className="fa fa-lock" /> Log In</Link></li>
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
  }
  )
const mapDispatchToProps = dispatch => ({
    //getProfileFetch: () => dispatch(getProfileFetch()),
    logoutUser: () => dispatch(logoutUser())
  })
  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header)); 