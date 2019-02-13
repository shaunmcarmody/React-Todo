import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [],
      todo: '',
    }
  }

  handleChange = e => this.setState({ todo: e.target.value });

  addTodo = e => {
    e.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.todo],
      todo: ''
    });
  }

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm handleChange={this.handleChange} todo={this.state.todo} addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
