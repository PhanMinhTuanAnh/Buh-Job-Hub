import React, { Component } from 'react'

export default class FilterResume_ByLocation extends Component {
  render() {
    return (
      <div className="widget">
        <h4>Location</h4>
        <form action="#" method="get">
          <input type="text" placeholder="State / Province"  />
          <input type="text" placeholder="City"  />
          <input type="text" className="miles" placeholder="Miles"  />
          <label htmlFor="zip-code" className="from">from</label>
          <input type="text" id="zip-code" className="zip-code" placeholder="Zip-Code"  /><br />
          <button className="button">Filter</button>
        </form>
      </div>
    );
  }
}
