import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import { Card, Label, CardBody, CardTitle, Col, Button, Form, Input, FormGroup } from 'reactstrap';

import { addTodo } from '../actions';

function TodoForm(props) {

  const initFormData = {
    id: Date.now(),
      title: '',
      description: '',
      completeDate: '',
      complete: 0
  }

  const [formData, setFormData] = useState(initFormData);
  const [date, setDate] = useState(Date.now());

  const handleChange = evt => {
    const { name, value } = evt.target;
   console.log(formData)
    setFormData({ ...formData,  [name]: value  });
  };

  const dateChange = date => {
    setDate(date);
    console.log('the date I picked', date);

  }
  const handleClick = () => {
    console.log('testing handleClick', formData)
    addTodo(formData);
    setFormData(initFormData);
  };

  const { title, description } = formData;

  return (
    <Card>
    <Form className="todo-form"
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        handleClick();
      }} >
      <CardTitle>Add your next todo</CardTitle>
      <CardBody>
        <FormGroup>
          <Input
            type='text'
            name="title"
            placeholder="Task title"
            onChange={handleChange}
            value={formData.title} />
        </FormGroup>
        <FormGroup>
          <Input
            type='textarea'
            name="description"
            placeholder="Describe your task"
            onChange={handleChange}
            value={formData.description} />
        </FormGroup>
        <FormGroup row>
          <Label for="data" sm={4}>Due date</Label>
          <Col sm={8}>
          <DatePicker name='date' selected={date} onChange={dateChange} />
          </Col>
        </FormGroup>
          <Button type="submit">Add</Button>
          <Button onClick={props.clearTodos}>Clear all</Button>
      </CardBody>
    </Form>
    </Card>

  );
}

export default TodoForm;