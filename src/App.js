import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
         
          <h2>To Do List</h2>
          <Todos/>
        </div>
        
      </div>
    );
  }
}

export default App;
