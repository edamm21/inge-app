import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTODOs } from '../actions/todoActions';

class Landing extends Component {
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

export default connect(mapStateToProps, {getTODOs} )(Landing);
