import React, { Component } from 'react'

export default class FilterJob_ByTime extends Component {
  render() {
    return (
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
    );
  }
}
