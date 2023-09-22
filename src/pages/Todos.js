import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from '../components/TodoTemplate';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';
import { useNavigate } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';


function Todos() {

  const navigate = useNavigate();
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '프로젝트 준비하기',
      checked: true,
    },
    {
      id: 2,
      text: 'UI 구성하기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 엡 만들어 보기',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );


  return (
    <>
      <button onClick={() => navigate("/")}>
        <MdArrowBack /> 
      </button>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} />
      </TodoTemplate>
    </>
  );
}

export default Todos;