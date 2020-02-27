import React, { useState } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
// import { Route, Link } from "react-router-dom";

export default function CardItem(props) {
  [isDone, setIsDone] = useState(false);

// Not sure if we will handle the state via useState or redux

  return (
    <div className='cardItem'>
      <Card>
        <CardBody>
            <CardText className='editlink' onEdit={editPop}>Edit</CardText>
            {/* Insert route, link to an edit page/popover */}
            <CardTitle>props.data.title</CardTitle>
            <CardSubtitle>props.data.status</CardSubtitle>
            <CardText>props.data.description</CardText>
            <Button className='donebtn' onDone={doneStatus}>Done</Button>
            {/* Done button will change status of the ticket. This element is NOT available for already 'Done' todo cards */}
            <CardText>props.data.duedate</CardText>
        </CardBody>
      </Card>
    </div>
  );
}