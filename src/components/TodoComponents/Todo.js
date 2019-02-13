import React from 'react';

const Todo = (props) => {
    return (
        <li onClick={props.toggleTodo} id={props.id}>{props.todo}</li>
    );
}

export default Todo;