import React, { Component } from "react";

class Subjects extends Component {
  constructor (){
    super();
    this.state = {
      newSubject: {}
    } 
  }
  static defaultProps = {
    groups: ["MPC", "BiPC", "CEC"]
  };
  handleSubmit(e) {
    // console.log(this.refs.group);
    // console.log(this.refs.title.value);
    if(this.refs.title.value === ''){
      alert('Please enter a Title value');
    }
    else{
      this.setState({newSubject: {
        title: this.refs.title.value,
        group: this.refs.group.value
      }}, function (){
        console.log(this.state)
      });
    }
    console.log('Submitted');
    e.preventDefault();
  }
  render() {
    let groupOptions = this.props.groups.map(group => {
      return (
        <option key={group} value='group' ref='group'>
          {group}
        </option>
      );
    });
    return (
      <div>
        <h3>Add a Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Subject Title:</label>
          <br />
          <input type="text" ref="title" />
          <br />
          <label>Group:</label>
          <br />
          <select title="group" ref='group'>{groupOptions}</select>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Subjects;
