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
      todos: this.getItems(),
      todo: {
        task: '',
        completed: false,
        id: ''
      }
    }
    console.log(this.state.todos);
  }

  getItems = () => {
    const store = [];
    for (let i = 0; i < localStorage.length; i ++) {
      store.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    return store;
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
    localStorage.setItem(this.state.todo.id, JSON.stringify(this.state.todo));
  }

  toggleTodo = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.map(todo => todo.id !== e.target.id ? todo : {...todo, completed: !todo.completed })
    });
    const todo = JSON.parse(localStorage.getItem(e.target.id));
    localStorage.setItem(e.target.id, JSON.stringify({...todo, completed: !todo.completed }));
  }

  removeCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed ? todo : false)
    });
    this.state.todos.forEach(todo => todo.completed ? localStorage.removeItem(todo.id) : null);
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
          id={Date.now()}
          addTodo={this.addTodo}
          removeCompleted={this.removeCompleted}
        />
      </div>
    );
  }
}

export default App;
