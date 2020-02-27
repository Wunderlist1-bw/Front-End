import React from 'react';
import { connect } from 'react-redux';



const todoList = props => {


    return (
        <>
            <h1> A TODO LIST WILL GO HERE AT SOME POINT</h1>

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
    {}
)(todoList);