import React, { Component } from 'react'
import FilterJob_ByTime from './FilterJob_ByTime/FilterJob_ByTime'
import FilterJob_ByLocation from './FilterJob_ByLocation/FilterJob_ByLocation';
import FilterJob_ByType from './FilterJob_ByType/FilterJob_ByType';
import FilterJob_ByRate from './FilterJob_ByRate/FilterJob_ByRate';

export default class Widgets extends Component {
  render() {
    return (
        <div className="five columns">
          <FilterJob_ByTime />
          <FilterJob_ByLocation />
          <FilterJob_ByType />
          <FilterJob_ByRate />
        </div>
    );
  }
}
