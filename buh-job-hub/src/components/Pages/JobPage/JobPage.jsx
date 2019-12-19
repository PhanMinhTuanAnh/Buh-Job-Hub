import React, { Component } from 'react'
import TitleBar from './TitleBar/TitleBar'
import Content from './Content/Content'
import { connect } from 'react-redux'
import * as actions from './../../../react-redux/index_actions'
import { Link } from 'react-router-dom';
class JobPage extends Component {
  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.actFetchJobPageRequest(id)
    }
    
  }
  render() {
    return (
      <div>
        <div className="clearfix" />
        {/* Titlebar */}
        <TitleBar job_page = {this.props.job_page}/>
        <div className="container">
          {/* Content*/}
          <Content job_page = {this.props.job_page} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    job_page: state.job_page,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actFetchJobPageRequest: (id) => {
      dispatch(actions.actFetchJobPageRequest(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(JobPage);
