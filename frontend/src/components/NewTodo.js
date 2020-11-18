import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todoActions';

class NewTodo extends Component {

    createTodo = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const deadline = document.getElementById('deadline').value;
        console.log(title, description, deadline);
        const newTodo = {
            title: title,
            description: description,
            deadline: deadline
        };
        this.props.addTodo(newTodo);
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <form id="todo-form">
                    <label for="title">Título</label>
                    <input id="title" type="text" name="title" placeholder="Título del TODO" style={{width: '100%', marginBottom: 20}}/>
                    <label for="description">Descripción</label>
                    <input id="description" type="text" name="description" placeholder="Descripción adicional" style={{width: '100%', marginBottom: 20}}/>
                    <label for="deadline">Fecha finalización</label>
                    <input id="deadline" type="date" name="deadline"  style={{width: '100%', marginBottom: 20}}/>
                    <button className="btn btn-primary" type="button" onClick={this.createTodo}  style={{width: '100%', marginBottom: 20}}>Crear TODO</button>
                </form>
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps, { addTodo })(NewTodo)
