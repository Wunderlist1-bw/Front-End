import React from 'react';
import { CardColumns, Button } from 'reactstrap';

import { connect } from 'react-redux';

import { getList } from '../../actions';

import CardItem from './CardItem';
import SearchBar from '../SearchBar';
// import TodoForm from './TodoForm';

const todoList = props => {

    const getTodos = e => {
        e.preventDefault();
        props.getList();
    }

    return (
        <div className='todo-app'>
            <div className='action-bar'>
                {/* <Button onClick={getTodos}>Fetch my todos</Button> */}
            </div>

            <CardColumns>
                {/* <TodoForm /> */}
                <Button onClick={getTodos}>Fetch deleted items</Button>
                {props.list.filter(todo => {
                    // console.log(todo);
                    if (todo.complete === 0) {
                        console.log(todo)
                        // < CardItem key={todo.id} props={todo} />
                    }
                })}

            </CardColumns>
        </div>
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