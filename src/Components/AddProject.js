import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }

  static defaultProps = {
    groups: ['MPC', 'BiPC', 'CEC']
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Title is required');
    } else {
      this.setState({newProject:{
        id: uuid.v4(),
        title: this.refs.title.value,
        group: this.refs.group.value
      }}, function(){
        //console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  render() {
    let groupOptions = this.props.groups.map(group => {
      return <option key={group} value={group}>{group}</option>
    });
    return (
      <div>
        <h3>Add Subjects</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title :</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Group :</label><br />
            <select ref="group">
              {groupOptions}
            </select>
          </div>
          <br />
          <input type="submit" value="Submit" />
          <br />
        </form>
      </div>
    );
  }
}

AddProject.propTypes = {
  groups: React.PropTypes.array,
  addProject: React.PropTypes.func
}

export default AddProject;