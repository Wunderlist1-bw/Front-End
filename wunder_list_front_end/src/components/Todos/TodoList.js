import React from 'react';
import { CardColumns, Button } from 'reactstrap';

import { connect } from 'react-redux';

import { getList, deleteTodo } from '../../actions';

import CardItem from './CardItem';
<<<<<<< HEAD:wunder_list_front_end/src/components/TodoList.js
import SearchBar from './SearchBar';
=======

>>>>>>> 5357d2fe9e94c9dcc0bed02338352604ef6bcdaa:wunder_list_front_end/src/components/Todos/TodoList.js
import TodoForm from './TodoForm';

const todoList = props => {

    const getTodos = e => {
        e.preventDefault();
        props.getList();
    }

    return (
        <div className='todo-app'>
            <div className='action-bar'>
                <Button onClick={getTodos}>Fetch my todos</Button>
                <SearchBar />
            </div>
            
            <CardColumns>
                <TodoForm />
                {props.list.map(todo => (
                    <CardItem key={todo.title} props={todo} />
                ))}
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
    { getList, deleteTodo }
)(todoList);