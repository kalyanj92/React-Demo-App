import React, { Component } from 'react';

class SubjectsList extends Component {
  render() {
    return (
        <li className="Subject">
          <strong> {this.props.subjects.title}</strong>: {this.props.subjects.group} 
        </li>   
    );
  }
}

export default SubjectsList;