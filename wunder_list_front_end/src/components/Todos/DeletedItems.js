import React, { useState, useEffect } from 'react';
import { CardColumns, Button, Card } from 'reactstrap';

import axiosWithAuth from '../../utils/axiosWithAuth';

import { connect } from 'react-redux';

import { getList } from '../../actions';

import CardItem from './CardItem';
import Actionbar from '../Actionbar';

// import SearchBar from '../SearchBar';
// import TodoForm from './TodoForm';

export default function DeletedItems(props) {

    // const getTodos = e => {
    //     e.preventDefault();
    //     props.getList();
    // }

    const [deleted, setDeleted] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get(`/api/task`)
            .then(response => {
                console.log('response', response)
                let results = response.data.filter(card => {
                    return card.complete === 1;
                });
                console.log('what are results', results)
                setDeleted(results);
            })
            .catch(error => console.log('Call not complete', error))
    }, []);

    return (
        <>
            <Actionbar />


            <div className='deleted_tasks'>
            <CardColumns>
                {deleted.map(todo => (
                    <CardItem key={todo.title} props={todo} />
                ))}
            </CardColumns>

            {/* <CardColumns> */}
            {/* <TodoForm /> */}
            {/* <Button onClick={getTodos}>Fetch deleted items</Button> */}

            {/* {props.list.filter(todo => {
                    // console.log(todo);
                    if (todo.complete === ) {
                        console.log(todo)
                        // < CardItem key={todo.id} props={todo} />
                    } */}
        </div >
        </>


    )
}

// export default deletedItems;