import React, { Component } from 'react';
import './index.css'

class Footer extends Component {
    handleCheckAll = (event) => {
        this.props.checkAllTodos(event.target.checked)
    }
    handleClearAllDone = () => {
        this.props.clearAllDone()
    }
    render() {
        const { todos } = this.props
        const doneCount = todos.reduce((prev, todo) => { return prev + (todo.done ? 1 : 0) }, 0)
        //Another method:
        // const doneTodos = todos.filter((todo) => {
        //     return todo.done === true
        // })
        // const doneCount = doneTodos.length
        const totalCount = todos.length

        return (
            <div className="todo-footer">
                <label for="">
                    <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === totalCount && totalCount !== 0 ? true : false} />
                </label>
                <span>
                    <span>Done {doneCount}</span> /Total {totalCount}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">Clear all done todos</button>

            </div>
        );
    }
}

export default Footer;
