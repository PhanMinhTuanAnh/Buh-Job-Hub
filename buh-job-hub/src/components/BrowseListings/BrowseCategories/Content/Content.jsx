import React, { Component } from 'react'
import GroupCategories from './GroupCategories/GroupCategories';

export default class Content extends Component {
    render() {
        return (
            <div id="categories">
                <GroupCategories/>
                <GroupCategories/>
                <GroupCategories/>
            </div>
        );
    }
}



