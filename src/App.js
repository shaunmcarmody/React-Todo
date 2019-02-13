import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import './components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [],
      todo: {
        task: '',
        completed: false
      }
    }
  }

  handleChange = e => {
    this.setState({
      todo: {
        task: e.target.value,
        completed: false
      }
    });
  }

  addTodo = e => {
    e.preventDefault();
    this.setState({
      todos: [ ...this.state.todos, this.state.todo],
      todo: {
        task: '',
        completed: false
      }
    });
  }

  toggleTodo = e => {
    e.preventDefault();
    console.log(this.state.todos[e.target.id]);
    e.target.classList.toggle('completed');
  }

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
        />
        <TodoForm 
          handleChange={this.handleChange}
          value={this.state.todo.task}
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
