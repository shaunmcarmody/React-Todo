// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <ul>
            {
                props.todos.map(todo => <Todo id={todo.id} todo={todo.task} key={todo.id} completed={todo.completed} toggleTodo={props.toggleTodo} />)
            }     {/* Our id and key needed in this case because we are dynamically assigning an id in the todo object */}
        </ul>
    );
}

export default TodoList;
