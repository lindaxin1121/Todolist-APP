import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

import './App.css'

class App extends Component {
    state = {
        todos: [
            { id: '001', name: "eating", done: true },
            { id: '002', name: 'sleeping', done: true },
            { id: '003', name: 'coding', done: false }
        ]
    }
    //add a todo,receive a parameter which is a object
    addTodo = (todoObj) => {
        const { todos } = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({ todos: newTodos })
    }
    //update the check status of the items
    updateTodo = (id, done) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) {
                return { ...todoObj, done: done }
            } else {
                return todoObj
            }
        })
        this.setState({ todos: newTodos })
    }
    //delete an todo item
    deleteTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id
        })
        this.setState({ todos: newTodos })

    }
    // check "All done" in footer and all todos get checked or unchecked
    checkAllTodos = (done) => {
        const { todos } = this.state
        const newTodos = todos.map((todo) => {
            return { ...todo, done: done }
        })
        this.setState({ todos: newTodos })
    }

    // Clear all done todos
    clearAllDone = () => {
        const { todos } = this.state
        const newTodos = todos.filter((todoObj) => {
            return todoObj.done === false
        })
        this.setState({ todos: newTodos })
    }


    render() {

        return (
            <div id="root">
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addTodo={this.addTodo} />
                        <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />

                        <Footer todos={this.state.todos} checkAllTodos={this.checkAllTodos} clearAllDone={this.clearAllDone} />
                    </div>

                </div>
            </div>
        );
    }
}

export default App;