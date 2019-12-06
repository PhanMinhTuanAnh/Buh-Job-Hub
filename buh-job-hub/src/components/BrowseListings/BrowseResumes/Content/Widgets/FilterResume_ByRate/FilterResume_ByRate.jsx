import React, { Component } from 'react'

export default class FilterResume_ByRate extends Component {
  render() {
    return (
      <div className="widget">
        <h4>Rate / Hr</h4>
        <ul className="checkboxes">
          <li>
            <input id="check-6" type="checkbox" name="check" defaultValue="check-6" defaultChecked />
            <label htmlFor="check-6">Any Rate</label>
          </li>
          <li>
            <input id="check-7" type="checkbox" name="check" defaultValue="check-7" />
            <label htmlFor="check-7">$0 - $25 <span>(231)</span></label>
          </li>
          <li>
            <input id="check-8" type="checkbox" name="check" defaultValue="check-8" />
            <label htmlFor="check-8">$25 - $50 <span>(297)</span></label>
          </li>
          <li>
            <input id="check-9" type="checkbox" name="check" defaultValue="check-9" />
            <label htmlFor="check-9">$50 - $100 <span>(78)</span></label>
          </li>
          <li>
            <input id="check-10" type="checkbox" name="check" defaultValue="check-10" />
            <label htmlFor="check-10">$100 - $200 <span>(98)</span></label>
          </li>
          <li>
            <input id="check-11" type="checkbox" name="check" defaultValue="check-11" />
            <label htmlFor="check-11">$200+ <span>(21)</span></label>
          </li>
        </ul>
      </div>
    );
  }
}
