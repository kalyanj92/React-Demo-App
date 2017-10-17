import React, { Component } from 'react';
import Subjects from './Components/Subjects';
//import SubjectsList from './Components/SubjectsList.js';
import './App.css';
//import $ from 'jquery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      subjects: [ ]
    };
  }
  componentWillMount(){
    this.setState({subjects:[        {
      title: 'Mathematics',
      group: 'MPC'
    },
    {
      title: 'Biology',
      group: 'BiPC'
    },
    {
      title: 'Civics',
      group: 'CEC'
    }
   ] });
  }
  render() {
    // console.log(this.state.subjects);
    return (
      <div className='app'>
        My React JS application
        <Subjects  subjects={this.state.subjects}/>
      </div>
    );
  }
}

export default App;
