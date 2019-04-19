import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
          div{
            border-radius:15%;
            border-bottom:solid 1px black;
            margin-bottom:15px;
            padding-bottom:15px;
          }
      `}</style>
      <h1>Minesweeper in React</h1>
      <Link to="/">Home</Link> | <Link to="/leaderboard">Leaderboard</Link>
    </div>
  );
}

export default Header;
