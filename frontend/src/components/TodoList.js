import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../actions/todoActions';

class TodoList extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(mapStateToProps, { getTodos })(TodoList);
