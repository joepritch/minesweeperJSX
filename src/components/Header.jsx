import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>'Minesweeper in React'</h1>
      <Link to="/">Home</Link> | <Link to="/leaderboard">Leaderboard</Link>
    </div>
  );
}

export default Header;
