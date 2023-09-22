import { MdCheckBoxOutlineBlank, MdCheckBox, MdDelete } from 'react-icons/md';
import cn from 'classnames';
import '../styles/TodoListItem.scss';
import axios from 'axios';
import { useState } from 'react';

const TodoListItem = ({ todo, onRemove }) => {
  const { id, text } = todo;
  const [checked, setChecked] = useState(todo.checked);

  const handleRemove = async () => {
    try {
      const deleteUrl = `https://todo2-b1565-default-rtdb.firebaseio.com/todos/${id}.json`;
      await axios.delete(deleteUrl);
      onRemove(id);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const toggleCheck = async () => {
    try {
      const updatedChecked = !checked;
      setChecked(updatedChecked);

      const updateUrl = `https://todo2-b1565-default-rtdb.firebaseio.com/todos/${id}.json`;
      await axios.patch(updateUrl, { checked: updatedChecked });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={toggleCheck}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div> 
      </div>
      <div className="remove" onClick={handleRemove}>
        <MdDelete />
      </div>
    </div>
  );
};

export default TodoListItem;
