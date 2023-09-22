import TodoListItem from './TodoListItem';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TodoList = ({ todos, onRemove }) => {
  const [input, setInput] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get('https://todo2-b1565-default-rtdb.firebaseio.com/todos.json', {});
      const data = res.data; 

      const dataArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));

      setInput(dataArray);
      console.log(res);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="TodoList">
      {input.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default TodoList;