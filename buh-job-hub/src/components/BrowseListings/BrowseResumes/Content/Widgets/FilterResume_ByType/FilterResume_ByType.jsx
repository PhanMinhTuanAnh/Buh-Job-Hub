import React, { Component } from 'react'

export default class FilterResume_ByType extends Component {
  render() {
    return (
      <div className="widget">
        <h4>Job Type</h4>
        <ul className="checkboxes">
          <li>
            <input id="check-1" type="checkbox" name="check" defaultValue="check-1" defaultChecked />
            <label htmlFor="check-1">Any Type</label>
          </li>
          <li>
            <input id="check-2" type="checkbox" name="check" defaultValue="check-2" />
            <label htmlFor="check-2">Full-Time <span>(312)</span></label>
          </li>
          <li>
            <input id="check-3" type="checkbox" name="check" defaultValue="check-3" />
            <label htmlFor="check-3">Part-Time <span>(269)</span></label>
          </li>
          <li>
            <input id="check-4" type="checkbox" name="check" defaultValue="check-4" />
            <label htmlFor="check-4">Internship <span>(46)</span></label>
          </li>
          <li>
            <input id="check-5" type="checkbox" name="check" defaultValue="check-5" />
            <label htmlFor="check-5">Freelance <span>(119)</span></label>
          </li>
        </ul>
      </div>
    );
  }
}
