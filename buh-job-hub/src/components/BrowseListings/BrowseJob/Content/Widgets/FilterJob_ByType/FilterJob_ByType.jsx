import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './../../../../../../react-redux/index_actions'
class FilterJob_ByType extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fruites: [
        {value: "Any-type", isChecked: false},
        {value: "Full-time", isChecked: false},
        {value: "Part-time", isChecked: false},
        {value: "Freelance", isChecked: false},
        {value: "Internship", isChecked: false},
        {value: "Temporary", isChecked: false}
      ],
      filter:[

      ]
    }
  }
  updateFilter=(fruites)=>{
    let a =[]
    fruites.forEach(fruite => {
      if (fruite.isChecked)
        a.push(fruite.value)
   })
   this.setState({filter: a})
  }
  handleAllChecked = (event) => {
    let fruites = this.state.fruites
    fruites.forEach(fruite => fruite.isChecked = event.target.checked) 
    this.setState({fruites: fruites})
    this.updateFilter(this.state.fruites)
    this.props.actFilterJobPost(this.state.filter)

  }
  handleAllUncheckChecked = () => {
    let fruites = this.state.fruites
    fruites.forEach(fruite => fruite.isChecked = false) 
  }
  handleCheckChieldElement = (event) => {
    // this.handleAllUncheckChecked()
    let fruites = this.state.fruites
    fruites.forEach(fruite => {
       if (fruite.value === event.target.value)
          fruite.isChecked =  event.target.checked
    })
    this.setState({fruites: fruites})
    this.updateFilter(this.state.fruites)
    this.props.actFilterJobPost(this.state.filter)
  }
  render() {
    var {fruites,filter} = this.state
    console.log(this.props.job_posts_filter)
    return (
      <div className="widget">
        <h4>Job Type</h4>
        <ul className="checkboxes">
          <li>
            <input id="check-1" type="checkbox" name="check" defaultValue="Any-type" defaultChecked  onClick={this.handleAllChecked}/>
            <label htmlFor="check-1">Any-type</label>
          </li>
          <li>
            <input id="check-2" type="checkbox" name="check" defaultValue="Full-time" onClick={this.handleCheckChieldElement}  />
            <label htmlFor="check-2">Full-time <span>(312)</span></label>
          </li>
          <li>
            <input id="check-3" type="checkbox" name="check" defaultValue="Part-time" onClick={this.handleCheckChieldElement}/>
            <label htmlFor="check-3">Part-time <span>(269)</span></label>
          </li>
          <li>
            <input id="check-4" type="checkbox" name="check" defaultValue="Internship" onClick={this.handleCheckChieldElement}/>
            <label htmlFor="check-4">Internship <span>(46)</span></label>
          </li>
          <li>
            <input id="check-5" type="checkbox" name="check" defaultValue="Freelance" onClick={this.handleCheckChieldElement}/>
            <label htmlFor="check-5">Freelance <span>(119)</span></label>
          </li>
          <li>
            <input id="check-6" type="checkbox" name="check" defaultValue="Temporary" onClick={this.handleCheckChieldElement}/>
            <label htmlFor="check-6">Temporary <span>(100)</span></label>
          </li>
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    job_posts_filter: state.job_posts_filter,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actFilterJobPost: (filter) => {
          dispatch(actions.actFilterJobPost(filter))
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterJob_ByType);