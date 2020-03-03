import React, { useState } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
// import { Route, Link } from "react-router-dom";



export default function CardItem(props) {
  // [isDone, setIsDone] = useState(false);

  // Not sure if we will handle the state via useState or redux
  console.log('testing props in card item', props.props.key);

  return (
    <div className='cardItem'>
      <Card>
        <CardBody>
          {/* <CardText className='editlink' onEdit={editPop}>Edit</CardText> */}
          {/* Insert route, link to an edit page/popover */}
          <CardTitle>Task: {props.props.title}</CardTitle>
          <CardSubtitle>Description: {props.props.description}</CardSubtitle>
          <CardText>Due date: {props.props.completeDate}</CardText>
          {/* <Button className='donebtn' onDone={doneStatus}>Done</Button> */}
          {/* Done button will change status of the ticket. This element is NOT available for already 'Done' todo cards */}
          <CardText>{props.props.due_date}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}