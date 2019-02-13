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
        completed: false,
        id: ''
      }
    }
  }

  handleChange = e => {
    this.setState({
      todo: {
        task: e.target.value,
        completed: false,
        id: e.target.id
      }
    });
  }

  addTodo = e => {
    e.preventDefault();
    this.setState({
      todos: [ ...this.state.todos, this.state.todo],
      todo: {
        task: '',
        completed: false,
        id: ''
      }
    });
  }

  toggleTodo = e => {
    e.preventDefault();
    const completed = this.state.todos[e.target.id].completed ? false : true;
    const todos = this.state.todos.map(todo => {
      if (todo.id === e.target.id) {
        return {
          task: todo.task,
          completed,
          id: todo.id
        }
      }

      return {
        task: todo.task,
        completed: todo.completed,
        id: todo.id
      }
    });

    this.setState({
      todos: todos
    });
    e.target.classList.toggle('completed');
  }

  removeCompleted = e => {
    e.preventDefault();
    const todos = this.state.todos.filter(todo => !todo.completed ? todo : false)
    this.setState({
      todos
    });
    
    // console.log('works');
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
          id={this.state.todos.length}
          addTodo={this.addTodo}
          removeCompleted={this.removeCompleted}
        />
      </div>
    );
  }
}

export default App;
