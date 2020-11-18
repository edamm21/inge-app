import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../actions/todoActions';
import TodoList from './TodoList';

class Landing extends Component {

    state = {
        todos: []
    }

    componentDidMount() {
        this.props.getTodos();
    }

    render() {
        return (
            <div>
                <TodoList todos={this.todos}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
   todos: state.todos
});

export default connect(mapStateToProps, { getTodos })(Landing);
