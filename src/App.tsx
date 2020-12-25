import Form from './components/form';
import Nav from './components/nav';
import List from './components/list';
import {useEffect, useState} from 'react';
import {ITodo} from './components/interfaces';

const App = () => {
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
      <Nav />
      <div className="container">
        <Form onFormSubmit={addTodo} />
        <List
          data={todos}
          clickHandler={completeTodo}
          deleteHandler={deleteTodo}
        />
      </div>
    </>
  );
};

export default App;
