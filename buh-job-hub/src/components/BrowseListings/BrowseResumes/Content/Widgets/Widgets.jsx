import React, { Component } from 'react'
import FilterResume_ByTime from './FilterResume_ByTime/FilterResume_ByTime';
import FilterResume_ByLocation from './FilterResume_ByLocation/FilterResume_ByLocation';
import FilterResume_ByType from './FilterResume_ByType/FilterResume_ByType';
import FilterResume_ByRate from './FilterResume_ByRate/FilterResume_ByRate';

export default class Widgets extends Component {
  render() {
    return (
        <div className="five columns">
          <FilterResume_ByTime />
          <FilterResume_ByLocation />
          <FilterResume_ByType />
          <FilterResume_ByRate />
        </div>
    );
  }
}
