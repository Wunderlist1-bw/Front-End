import React from 'react';
import { connect } from 'react-redux';

import { getList } from '../actions';

import CardItem from '../components/CardItem';

import TodoForm from './TodoForm';

const todoList = props => {

    const getTodos = e => {
        e.preventDefault();
        props.getList();
    }
    console.log(props);

    return (
        <>
            <h1> TODO LIST TEST DATA:</h1>
            <button onClick={getTodos}>FETCH THOSE TODOS</button>
            {/* {console.log(props.list)} */}
            {
                props.list.map(todo => (
                    <CardItem key={todo.title} props={todo} />
                ))

            }
            <h3>More things to get done, add here:</h3>
            {/* <TodoForm /> */}
        </>
    )
}

const mapStateToProps = state => {
    return {
        list: state.task,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { getList }
)(todoList);