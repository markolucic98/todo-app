import React from 'react';
import '../App.css';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <ul>
      {props.stavkeIzNiza.map((stavke) => (
        <TodoItem
          key={stavke.id}
          stavke={stavke}
          handleChangeProp={props.handleChangeProps}
          delTodoProp={props.delTodoProp}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>
  );
};
export default TodoList;
