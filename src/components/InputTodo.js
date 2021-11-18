import React, { useState } from 'react';

const InputTodo = (props) => {
  const [titel, setTitle] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titel.trim()) {
      props.addTodoProps(titel);
      setTitle('');
    } else {
      alert('please write Item');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="add todo...."
        value={titel}
        name="titel"
        onChange={onChange}
      />
      <button className="input-submit">Submit</button>
    </form>
  );
};

export default InputTodo;
