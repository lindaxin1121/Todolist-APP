import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import './index.css'

class Header extends Component {

    handleKeyUp = (event) => {
        // check if it is the enter key
        if (event.keyCode !== 13) return
        if (event.target.value.trim() === "") {
            alert("The input cannot be null")
            return
        }
        // transfer  todoObj to App component
        const todoObj = { id: nanoid(), name: event.target.value, done: false }
        this.props.addTodo(todoObj)
        //clear the input
        event.target.value = ""
    }


    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" name="" id="" placeholder="Please type in the name of task and hit enter to confirm" />
            </div>
        );
    }
}

export default Header;
