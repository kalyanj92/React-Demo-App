import React, { Component } from 'react';
//import $ from 'jquery';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
    }
  }

  render() {
    return (
        <div className="app">
          MyApp
        </div>   

    );
  }
}

export default App;