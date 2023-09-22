import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Homepage.scss'; 

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="Homepage">
      <div>Todolist</div>
      <button onClick={() => navigate("/Todos")}>시작하기</button>
    </div>
  );
};

export default Homepage;
