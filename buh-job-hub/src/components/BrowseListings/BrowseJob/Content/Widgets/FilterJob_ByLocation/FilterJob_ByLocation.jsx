import React, { Component } from 'react'

export default class FilterJob_ByLocation extends Component {
  render() {
    return (
      <div className="widget">
        <h4>Location</h4>
        <form action="#" method="get">
          <input type="text" placeholder="State / Province" defaultValue />
          <input type="text" placeholder="City" defaultValue />
          <input type="text" className="miles" placeholder="Miles" defaultValue />
          <label htmlFor="zip-code" className="from">from</label>
          <input type="text" id="zip-code" className="zip-code" placeholder="Zip-Code" defaultValue /><br />
          <button className="button">Filter</button>
        </form>
      </div>
    );
  }
}
