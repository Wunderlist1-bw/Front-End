import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';

import { addTodo } from '../actions';

function TodoForm(props) {

  const initFormData = {
    todo:
    {
      id: "",
      task: "",
      description: "",
      completed: false
    }
  }

  const [formData, setFormData] = useState();
  const [date, setDate] = useState(Date.now());

  const handleChange = evt => {
    const { name, value } = evt.target;

    setFormData({
      todo: {
        ...formData,
        ...{ [name]: value }
      }
    });
  };

  // handleChange = e => {
  //   this.setState({
  //     credentials: {
  //       ...this.state.credentials,
  //       [e.target.name]: e.target.value
  //     }
  //   })
  // }

  const dateChange = date => {
    setDate(date);
    console.log('the date I picked', date);

  }
  const handleClick = formData => {
    console.log('testing handle click for form submit');
    addTodo(formData);
    setFormData(initFormData);
  };

  const { task, description } = formData;

  return (
    <form
      className="todo-form"
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        handleClick(formData);
      }}
    >
      <div className="todo-form-content">
        <div>
          <input
            name="task"
            placeholder="Enter todo name"
            onChange={handleChange}
            value={task} />
        </div>
        <div>
          <input
            name="description"
            placeholder="Describe todo"
            onChange={handleChange}
            value={description} />
        </div>
        <br />
        <div>
          When is this 'todo' due?:
          <br />
          <DatePicker selected={date} onChange={dateChange} />
        </div>
        <div>
          <button onClick={props.handleClick} type="submit">Add todo</button>
        </div>
        <div>
          {/* <button onClick={props.clearTodos}>clear all</button> */}
        </div>
      </div>
    </form>
  );
}

export default TodoForm;