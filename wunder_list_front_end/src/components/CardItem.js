import React, { useState } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { connect } from 'react-redux';
// import { Route, Link } from "react-router-dom";

import { deleteTodo } from '../actions';


const CardItem = props => {
  // [isDone, setIsDone] = useState(false);

  // Not sure if we will handle the state via useState or redux

  // const deleteItem = (event, item) => {
  //   event.preventDefault();
  //   props.deleteTodo(item);
  // }
  return (
    <div className='cardItem'>
      <Card>
        <CardBody>
          {/* <CardText className='editlink' onEdit={editPop}>Edit</CardText> */}
          {/* Insert route, link to an edit page/popover */}
          <CardTitle>Task: {props.props.title}</CardTitle>
          <CardSubtitle>Description: {props.props.description}</CardSubtitle>
          <CardText>Due date: {props.props.completeDate}</CardText>
          <Button
            color='danger'
            className="delete"
            onClick={
              // () =>
              // deleteTodo(props.props)
              e => {
                e.stopPropagation();
                console.log('testing delete button response', props.props);
                console.log(deleteTodo)
                props.deleteTodo(props.props)
              }
            }>DELETE</Button>
          {/* <Button className='donebtn' onDone={doneStatus}>Done</Button> */}
          {/* Done button will change status of the ticket. This element is NOT available for already 'Done' todo cards */}
          <CardText>{props.props.due_date}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(
  mapStateToProps,
  { deleteTodo }
)(CardItem);