import React, {useState} from 'react';

function TodoForm(props) {

  const initFormData = {
    id: "",
    task: "",
    completed: false
  }

  const [formData, setFormData] = useState(initFormData);

  const handleChange = evt => {
    const { name, value } = evt.target;

    setFormData({ ...formData, ...{ [name]: value }});
  };

  const handleClick = formData => {
    props.addTodo(formData);
    setFormData(initFormData);
  };

  const {task} = formData;

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
        <div>
          <button type="submit">Add</button>
        </div>
        <div>
          <button onClick={props.clearTodos}>clear all</button>
        </div>
      </div>
    </form>
  );}

  export default TodoForm;