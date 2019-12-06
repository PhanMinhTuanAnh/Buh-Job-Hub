import React, { Component } from 'react'
import ListJob_Item from './ListJob_Item/ListJob_Item'
import PagingJob from './PagingJob/PagingJob'

export default class ListingJob extends Component {
    render() {
        return (
            <div className="eleven columns">
              <div className="padding-right">
                <div className="listings-container">
                  <ListJob_Item/>
                  <ListJob_Item/>
                  <ListJob_Item/>
                  <ListJob_Item/>
                  <ListJob_Item/>
                  <ListJob_Item/>
                  <ListJob_Item/>
                  <ListJob_Item/>
                </div>
                <div className="clearfix" />
                <PagingJob/>
              </div>
            </div>
            

        );
    }
}
