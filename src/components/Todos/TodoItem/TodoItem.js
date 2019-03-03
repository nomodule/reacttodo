import React from 'react';

import classes from './TodoItem.module.css';
import Button from '../../UI/Button/Button';
import Checkbox from '../../UI/Checkbox/Checkbox';

const todoItem = (props) => {
    let todoItemClass = [classes.TodoItem];

    // if todo is completed then strikethrough it
    if (props.isCompleted) {
        todoItemClass.push(classes.isCompleted);
    }

    return (
        <div className={todoItemClass.join(' ')}>
            <div className={classes.Text} onDoubleClick={props.editTodoFn}>{props.text}</div>
            <div className={classes.Ctas}>
                <Checkbox 
                    className={classes.ToggleBtn} 
                    title="Mark as completed" 
                    isChecked={props.isCompleted}
                    changed={props.toggleComplete}/>

                <Button 
                    className={classes.RemoveBtn} 
                    title="Remove todo?" 
                    clicked={props.removeTodoFn}>&times;</Button>
            </div>
        </div>
    )
}

export default todoItem;