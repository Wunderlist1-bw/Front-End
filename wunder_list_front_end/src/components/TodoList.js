import React from 'react';
import { connect } from 'react-redux';

import { getList } from '../actions';

import CardItem from '../components/CardItem';

const todoList = props => {


    return (
        <>
            <h1> TODO LIST TEST DATA:</h1>
            {/* {console.log(props.list)} */}
            {
                props.list.map(todo => (
                    <CardItem key={todo.title} props={todo} />
                ))

            }

        </>
    )
}

const mapStateToProps = state => {
    return {
        list: state.list,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { getList }
)(todoList);