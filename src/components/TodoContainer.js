import React from 'react';
import Header from './Header.js';
import '../App.css';
import InputTodo from './InputTodo.js';
import TodoList from './TodoList.js';
import Navbar from './Navbar.js';
import About from '../pages/About.js';
import NotMatch from '../pages/NotMatch.js';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

const TodoContainer = () => {
  const [nizObjekata, setNizObjekata] = useState(getInitialTodos());

  const handleChange = (id) => {
    setNizObjekata(
      nizObjekata.map((stavka) => {
        if (stavka.id === id) {
          stavka.completed = !stavka.completed;
        }
        return stavka;
      })
    );
  };

  const delTodo = (id) => {
    setNizObjekata([
      ...nizObjekata.filter((stavka) => {
        return stavka.id !== id;
      }),
    ]);
  };
  const addTodoItem = (titel) => {
    const newTodo = {
      id: uuidv4(),
      title: titel,
      completed: false,
    };
    setNizObjekata([...nizObjekata, newTodo]);
  };
  const setUpdate = (updatedTitel, id) => {
    setNizObjekata([
      nizObjekata.map((stavke) => {
        if (stavke.id === id) {
          stavke.title = updatedTitel;
        }
        return stavke;
      }),
    ]);
  };

  // useEffect(() => {
  //   console.log(`test run`);

  //   const temp = localStorage.getItem(`nizObjekata`);
  //   const loadedTodos = JSON.parse(temp);

  //   if (loadedTodos) {
  //     setNizObjekata(loadedTodos);
  //   }
  // }, []);

  useEffect(() => {
    const temp = JSON.stringify(nizObjekata);
    localStorage.setItem('nizObjekata', temp);
  }, [nizObjekata]);

  function getInitialTodos() {
    const temp = localStorage.getItem('nizObjekata');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="inner">
              <Header />
              <InputTodo addTodoProps={addTodoItem} />
              <TodoList
                stavkeIzNiza={nizObjekata}
                handleChangeProps={handleChange}
                delTodoProp={delTodo}
                setUpdate={setUpdate}
              />
            </div>
          </div>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </>
  );
};
export default TodoContainer;
