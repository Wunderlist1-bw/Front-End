import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';

function TodoForm(props) {

  const initFormData = {
    id: "",
    task: "",
    completed: false
  }

  const [formData, setFormData] = useState(initFormData);
  const [date, setDate] = useState(Date.now());

  const handleChange = evt => {
    const { name, value } = evt.target;

    setFormData({ ...formData, ...{ [name]: value } });
  };

  const dateChange = date => {
    setDate(date);
    console.log('the date I picked', date);

  }
  const handleClick = formData => {
    props.addTodo(formData);
    setFormData(initFormData);
  };

  const { task } = formData;

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
          <input name="task" onChange={handleChange} value={task} />
        </div>
        <DatePicker selected={date} onChange={dateChange} />
        <div>
          <button type="submit">Add</button>
        </div>
        <div>
          <button onClick={props.clearTodos}>clear all</button>
        </div>
      </div>
    </form>
  );
}

export default TodoForm;