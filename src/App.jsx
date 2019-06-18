import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'go out for a run',
        completed: true
      },
      {
        id: 2,
        title: 'clean the house',
        completed: false
      },
      {
        id: 3,
        title: 'practice coding',
        completed: false
      }
    ]
  }
  render() {
    
    return (
      <div className="App">
        <div className="App-header">
          <Todos todos={this.state.todos} />
        </div>
        
      </div>
    );
  }
}

export default App;
