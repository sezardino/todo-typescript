import React, {useState, useEffect} from 'react';
import Form from '../../components/form';
import {ITodo} from '../../components/interfaces';
import List from '../../components/list';

const ToDoPage: React.FC = () => {
  const [todos, setTodos] = useState<Array<ITodo>>([]);
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos') || '[]'));
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (value: string) => {
    const data: ITodo = {
      value,
      id: Date.now(),
      completed: false,
    };
    setTodos((prevState) => [data, ...prevState]);
  };
  const completeTodo = (id: number) => {
    setTodos((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return {...item, completed: !item.completed};
        }
        return item;
      })
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prevState) => prevState.filter((item) => item.id !== id));
  };

  return (
    <>
      <Form onFormSubmit={addTodo} />
      <List
        data={todos}
        clickHandler={completeTodo}
        deleteHandler={deleteTodo}
      />
    </>
  );
};

export default ToDoPage;
