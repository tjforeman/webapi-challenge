import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import ProjectList from './components/ProjectList'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts:[],
      users:[] 
    };
  }

  render() {
    return ( 
      <div className="App">
      <Route path='/'  component={ProjectList} />
      </div> 
    );
  }
}

export default App
