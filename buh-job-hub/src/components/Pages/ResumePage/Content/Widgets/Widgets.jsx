import React, { Component } from 'react'

export default class Widgets extends Component {
    render() {
        return (
            <div className="eight columns">
                <h3 className="margin-bottom-20">Education</h3>
                {/* Resume Table */}
                <dl className="resume-table">
                    <dt>
                        <small className="date">2012 - 2015</small>
                        <strong>Bsc Computing at College of West Anglia</strong>
                    </dt>
                    <dd>
                        <p>Captain, why are we out here chasing comets? Maybe we better talk out here; the observation lounge has turned into a swamp. Ensign Babyface!</p>
                    </dd>
                    <dt>
                        <small className="date">2006 - 2010</small>
                        <strong>GCSE something at King Edward 7th</strong>
                    </dt>
                    <dd>
                        <p>Captain, why are we out here chasing comets? Maybe we better talk out here; the observation lounge has turned into a swamp. Ensign Babyface!</p>
                    </dd>
                    <dt>
                        <small className="date">2004 - 2006</small>
                        <strong>Test 2 at Test</strong>
                    </dt>
                    <dd>
                        <p>Phasellus vestibulum metus orci, ut facilisis dolor interdum eget. Pellentesque magna sem, hendrerit nec elit sit amet, ornare efficitur est.</p>
                    </dd>
                </dl>
            </div>
        );
    }
}
