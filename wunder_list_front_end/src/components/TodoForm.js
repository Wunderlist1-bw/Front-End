import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
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
          <DatePicker selected={date} onChange={dateChange} />
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

export default TodoForm;