import React, { Component } from 'react';
import { completeTodo, deleteTodo } from '../actions/todoActions';
import { connect } from 'react-redux';

class Todo extends Component {

    complete = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.completeTodo(this.props.todo.id);
    }

    delete = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.deleteTodo(this.props.todo.id);
    }

    render() {
        return (
            <div className="jumbotron">
                <h2>{this.props.todo.title}</h2>
                <p>{this.props.todo.description}</p>
                <hr/>
                <p>{'Fecha: ' + this.props.todo.deadline}</p>
                { this.props.todo.done ? 
                    <a className="btn btn-secondary" role="button" disabled={true}>Completado</a>
                    :
                    <a className="btn btn-success" role="button" onClick={this.complete}>Completar</a>
                }
                <a className="btn btn-danger" role="button" onClick={this.delete}>Eliminar</a>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(mapStateToProps, { completeTodo, deleteTodo })(Todo);
