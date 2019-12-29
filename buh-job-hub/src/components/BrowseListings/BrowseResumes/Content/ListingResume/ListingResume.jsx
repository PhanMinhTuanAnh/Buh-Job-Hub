import React, { Component } from 'react'
import ListResume_Item from './ListResume_Item/ListResume_Item'
import PagingResume from './PagingResume/PagingResume';
import * as actions from './../../../../../react-redux/index_actions';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


class ListingResume extends Component {

  componentDidMount(){
    this.props.actFetchResumesRequest();
  }

  render() {
    return (
      <div className="eleven columns">
        <div className="padding-right">
          <ul class="resumes-list alternative">
            {this.props.resumes.map((resume, key) => {
              return (<ListResume_Item 
                resume = {resume}
                actFetchResumesRequest = {this.props.actFetchResumesRequest}
              />) 
            })}
          </ul>
          <div className="clearfix" />
          <PagingResume />
        </div>
      </div>


    );
  }
}

const mapStateToProps = (state) => {
  return {
      resumes: state.resumes_reducer,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      actFetchResumesRequest: () => {
          dispatch(actions.actFetchResumesRequest())
      },
      actDeleteResumeRequest: (id) => {
          dispatch(actions.actDeleteResumeRequest(id))
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListingResume);
