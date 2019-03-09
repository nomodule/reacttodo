import React, { Component } from 'react';

import classes from './TodoController.module.css';
import Todos from '../../components/Todos/Todos';
import InputText from '../../components/UI/InputText/InputText';
import Button from '../../components/UI/Button/Button';

class TodoController extends Component {

    state = {
        nowShowing: 'all',
        editing: null,
        todos: [
            { id: 'dsa221', text: 'Make website logo smaller', isDone: false },
            { id: '45sdrL', text: 'Add cookie stripe', isDone: true },
            { id: 'rg1Od', text: 'Remove .html extension and convert in .php', isDone: false },
            { id: 'KiPs2', text: 'Add this gif in all industries pages and home page', isDone: false }
        ]
    }

    inputKeyupHandler = (event) => {
        if (event.keyCode === 13 && event.target.value !== '') {
            var randomID = Math.random().toString(36).substr(2, 5);
            let newTodo = {
                text: event.target.value,
                id: randomID,
                isDone: false
            }
            let updatedTodos = [
                ...this.state.todos,
                newTodo
            ];
            this.setState({todos: updatedTodos});

            event.target.value = '';
        } else if (event.keyCode === 13 && event.target.value === '') {
            alert("Please enter something first...");
        }
        
        // if (event.keyCode === 13 && event.target.value === '') {
            
        // }
    }

    editTodoHandler = (id) => {
        this.setState({editing: id});
    }

    updateTodoHandler = (id, event) => {
        let todosCopy = [
            ...this.state.todos
        ];

        let updatedTodos = todosCopy.map(todo => {
            if (todo.id === id) todo.text = event.target.value;
            return todo;
        });

        this.setState({editing: null, todos: updatedTodos});
    }

    removeTodoHandler = (id) => {
        var filteredTodos = this.state.todos.filter(todo => {
            return todo.id !== id;
        });

        this.setState({todos: filteredTodos});
    }

    toggleCompletehandler = (id) => {
        var updatedTodos = [
            ...this.state.todos
        ];
        
        updatedTodos.forEach(todo => {
            if (todo.id === id) {
                todo.isDone = !todo.isDone;
            }
        })

        this.setState({todos: updatedTodos});
    }

    allBtnHandler = () => {
        this.setState({nowShowing: 'all'});
    }

    activeBtnHandler = () => {
        this.setState({nowShowing: 'active'});
    }

    completedBtnHandler = () => {
        this.setState({nowShowing: 'completed'});
    }

    render() {
        // show todos w.r.t state
        let showTheseTodos = this.state.todos.filter(todo => {
            switch(this.state.nowShowing) {
                case 'active':
                    return !todo.isDone;
                case 'completed':
                    return todo.isDone;
                default:
                    return true;
            }
        });

        return (
            <div className={classes.TodoController}>
                <InputText 
                    className={classes.TodoControllerInputText} 
                    autofocus={true} 
                    placeholder="What needs to be done ?" 
                    keyup={this.inputKeyupHandler} />
                <Button 
                    className={`${classes.AllBtn} ${this.state.nowShowing === 'all' ? classes.Active : null}`} 
                    clicked={this.allBtnHandler}>All</Button>
                <Button 
                    className={`${classes.ActiveBtn} ${this.state.nowShowing === 'active' ? classes.Active : null}`}
                    clicked={this.activeBtnHandler}>Active</Button>
                <Button 
                    className={`${classes.CompletedBtn} ${this.state.nowShowing === 'completed' ? classes.Active : null}`}
                    clicked={this.completedBtnHandler}>Completed</Button>
                <Todos 
                    todos={showTheseTodos} 
                    removeTodoFn={this.removeTodoHandler} 
                    editTodoFn={this.editTodoHandler} 
                    updateEditState={this.updateTodoHandler} 
                    editing={this.state.editing} 
                    toggleComplete={this.toggleCompletehandler}/>
            </div>
        );
    }
}

export default TodoController;