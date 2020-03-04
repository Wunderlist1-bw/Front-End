import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";

import { connect } from 'react-redux';

import DatePicker from 'react-datepicker';
import { addTodo, getList } from '../actions';

function TodoForm(props) {

  const initFormData = {
    id: Date.now(),
    title: '',
    description: '',
    completeDate: '',
    complete: 0,
    users_id: 2
  }

  const [formData, setFormData] = useState(initFormData);
  // const [date, setDate] = useState(Date.now());

  const handleChange = evt => {
    const { name, value } = evt.target;
    console.log(formData)
    setFormData({ ...formData, [name]: value });
  };

  const dateChange = date => {
    // setDate(date);
    setFormData({ ...formData, completeDate: date })
    console.log('DATE:', date);
    console.log('formdata have date?', formData)
  }

  const handleClick = () => {
    const newFormData = {
      ...formData,
      completeDate: "hello world"
    };
    console.log('new form data', newFormData)
    console.log('testing handleClick', formData.completeDate)
    props.addTodo(newFormData)
      .then(() => props.getList());
    setFormData(initFormData);
  };

  const { title, description } = formData;
  console.log(typeof formData.completeDate)
  return (
    <form
      className="todo-form"
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        handleClick();
      }}
    >
      <div className="todo-form-content">
        <div>
          <input
            name="title"
            placeholder="Enter todo name"
            onChange={handleChange}
            value={formData.title} />
        </div>
        <div>
          <input
            name="description"
            placeholder="Describe todo"
            onChange={handleChange}
            value={formData.description} />
        </div>
        <br />
        <div>
          When is this 'todo' due?:
          <br />
          <DatePicker selected={formData.completeDate} onChange={dateChange} />
        </div>
        <div>
          <button type="submit">Add todo</button>
        </div>
        <div>
          <button onClick={props.clearTodos}>clear all</button>
        </div>
      </div>
    </form>
  );
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(
  mapStateToProps,
  { addTodo, getList }
)(TodoForm);
