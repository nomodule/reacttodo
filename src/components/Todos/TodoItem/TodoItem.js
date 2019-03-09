import React from 'react';

import classes from './TodoItem.module.css';
import Button from '../../UI/Button/Button';
import Checkbox from '../../UI/Checkbox/Checkbox';
import InputText from '../../UI/InputText/InputText';

const todoItem = (props) => {
    let todoItemClass = [classes.TodoItem];

    // if todo is completed then strikethrough it
    if (props.isCompleted) {
        todoItemClass.push(classes.isCompleted);
    }

    if (props.editable) {
        todoItemClass.push(classes.TodoItemEdit);
    }

    return (
        <div className={todoItemClass.join(' ')}>
            <div className={classes.TextAndControls}>
                <div 
                    className={classes.Text} 
                    onDoubleClick={props.editTodoFn}>{props.text}</div>
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
            {
                props.editable ? <InputText 
                className={classes.TodoItemEditInput} 
                dfValue={props.text} 
                autofocus={true} 
                blured={props.updateEditState} /> : null
            }
        </div>
    )
}

export default todoItem;