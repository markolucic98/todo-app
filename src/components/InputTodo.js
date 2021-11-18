// import React, { Component } from 'react';

// class ImputTodo extends Component {
//   state = {
//     title: '',
//   };

//   onChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.addTodoProps(this.state.title);
//     this.setState({
//       title: '',
//     });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className="form-container">
//         <input
//           className="input-text"
//           type="text"
//           placeholder="Add Todo..."
//           value={this.state.title}
//           onChange={this.onChange}
//           name="title"
//         />
//         <button className="input-submit">Submit</button>
//       </form>
//     );
//   }
// }

// export default ImputTodo;

//HOOKS

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
