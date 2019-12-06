import React, { Component } from 'react'
import ListResume_Item from './ListResume_Item/ListResume_Item'
import PagingResume from './PagingResume/PagingResume';

export default class ListingResume extends Component {
  render() {
    return (
      <div className="eleven columns">
        <div className="padding-right">
          <ul class="resumes-list alternative">
            <ListResume_Item />
            <ListResume_Item />
            <ListResume_Item />
            <ListResume_Item />
          </ul>
          <div className="clearfix" />
          <PagingResume />
        </div>
      </div>


    );
  }
}
