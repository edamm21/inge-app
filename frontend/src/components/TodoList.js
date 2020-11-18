import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../actions/todoActions';
import { Container, Spinner } from 'reactstrap';
import Todo from './Todo';

class TodoList extends Component {

    loadedComponent = (todos) => {
        if(todos.length === 0) {
            return (
                <Container style={{textAlign: 'center'}}>
                    <h3>No hay TODOs</h3>
                </Container>
            );
        } else {
            return (
                <div className="container" style={{width: '50%'}}>
                    {
                        todos.map(todo => {
                            return (<Todo todo={todo}/>);
                        })
                    }
                </div>
            )
        }
    
    };

    loadingComponent = () => (
        <Container style={{textAlign: 'center'}}>
            <Spinner color="secondary"/>
        </Container>
    );

    render() {
        let { todos } = this.props.todos;
        return (
            todos === null ? this.loadingComponent() : this.loadedComponent(todos)
        );
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(mapStateToProps, { getTodos })(TodoList);
