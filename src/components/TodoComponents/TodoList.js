// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <ul>
            {
                props.todos.map((todo, i) => <Todo id={i} todo={todo.task} key={i} toggleTodo={props.toggleTodo} />)
            }
        </ul>
    );
}

export default TodoList;
