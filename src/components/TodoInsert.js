import React, { useCallback, useState } from 'react';
import { MdFavorite } from 'react-icons/md';
import axios from 'axios';
import '../styles/TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      axios.put('https://todo2-b1565-default-rtdb.firebaseio.com/todos/17.json', {
        text: value,
        done: false,
      })
      .then((response) => {
        onInsert(value);
        setValue('');
      })
      .catch((error) => {
        console.error('데이터 추가 중 오류가 발생했습니다.', error);
      });

      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdFavorite />
      </button>
    </form>
  );
};

export default TodoInsert;
