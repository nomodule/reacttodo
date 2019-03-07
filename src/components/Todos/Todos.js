import React from 'react';

import TodoItem from './TodoItem/TodoItem';
import Auxx from '../../hoc/Auxx/Auxx';

const todo = (props) => {
    let todos = props.todos.map((todo, index) => {
        return <TodoItem 
            text={todo.text} 
            key={todo.id} 
            isCompleted={todo.isDone} 
            editable={props.editing === todo.id ? true : false} 
            removeEditState={props.removeEditState}
            removeTodoFn={props.removeTodoFn.bind(null, todo.id)} 
            editTodoFn={props.editTodoFn.bind(null, todo.id)}
            toggleComplete={props.toggleComplete.bind(null, todo.id)} />
    });

    return (
        <Auxx>
            {todos}
        </Auxx>
    )
}

export default todo;