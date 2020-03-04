import React from 'react';
import { CardColumns, Button } from 'reactstrap';

import { connect } from 'react-redux';

import { getList, deleteTodo } from '../actions';

import CardItem from '../components/CardItem';

import TodoForm from './TodoForm';

const todoList = props => {

    const getTodos = e => {
        e.preventDefault();
        props.getList();
    }

    return (
        <main>
            <Button onClick={getTodos}>Fetch my todos</Button>
            <CardColumns>
            <TodoForm />
            {props.list.map(todo => (
                <CardItem key={todo.title} props={todo} />
            ))}
            </CardColumns>
        </main>
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