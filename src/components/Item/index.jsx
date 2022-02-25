import React, { Component } from 'react';
import './index.css'

class Item extends Component {
    state = { mouse: false }

    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }

    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)

        }
    }
    handleDelete = (id) => {
        return () => {
            if (window.confirm("Are you sure to delete?")) {
                this.props.deleteTodo(id)
            }

        }

    }

    render() {
        const { id, name, done } = this.props
        const { mouse } = this.state
        return (
            <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} style={{ backgroundColor: mouse ? '#ddd' : 'white' }}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button onClick={this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>Delete</button>
            </li>
        );
    }
}

export default Item;
