import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'go out for a run',
        completed: false
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
  // Toogle complete
  markComplete = (id) => {
   this.setState({ todos: this.state.todos.map(
     todo => {
       if(todo.id === id) {
         todo.completed = !todo.completed

       }
       return todo;
     
      }) });
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id
      !==id)] });
  }
  
  render() {
    
    return (
      <div className="App">
        <div className="App-header">
          <Todos todos={this.state.todos} markComplete={this.markComplete} 
          delTodo={this.delTodo} />
        </div>
        
      </div>
    );
  }
}

export default App;
