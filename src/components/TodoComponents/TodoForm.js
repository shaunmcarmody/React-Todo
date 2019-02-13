import React from 'react';

const TodoForm = (props) => {
    return (
        <form>
            <input onChange={props.handleChange} placeholder="...todo" value={props.value} id={props.id} />
            <button onClick={props.addTodo}>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    );
}

export default TodoForm;