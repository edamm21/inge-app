import React, { Component } from 'react';
import { completeTodo, deleteTodo } from '../actions/todoActions';
import { connect } from 'react-redux';
import Axios from 'axios';

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
        document.getElementById('todo' + this.props.todo.id).style.display = 'none';
    }

    createDate = (date) => {
        let unformatted = new Date(date).toISOString().split('T')[0];
        const splitted = unformatted.split('-');
        const year  = splitted[0];
        const month = splitted[1];
        const day   = splitted[2];
        return day + '/' + month + '/' + year;
    }

    render() {
        return (
            <div className="jumbotron" id={'todo' + this.props.todo.id}>
                <h2>{this.props.todo.title}</h2>
                <p>{this.props.todo.description}</p>
                <hr/>
                <p>{'Fecha: ' + this.createDate(this.props.todo.deadline)}</p>
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
