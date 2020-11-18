import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../actions/todoActions';
import TodoList from './TodoList';
import NewTodo from './NewTodo';

class Landing extends Component {

    state = {
        todos: []
    }

    componentDidMount() {
        this.props.getTodos();
    }

    render() {
        return (
            <div class="row" style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}>
                <div className="col-3" style={{border: '1px solid black', height: 'max-content', borderRadius: 5}}>
                    <NewTodo/>
                </div>
                <div className="col-9">
                    <TodoList todos={this.todos}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
   todos: state.todos
});

export default connect(mapStateToProps, { getTodos })(Landing);
