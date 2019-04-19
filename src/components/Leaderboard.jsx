import React from 'react';
import Leaders from './Leaders';

const scores = [
  {
    name: 'Joe',
    score: '100'
  },
  {
    name: 'Not Joe',
    score: 'Not 100'
  }
];

function Leaderboard(){

  return(
    <div>
      <style jsx>{`
          .board{
            border: solid black 2px;
            border-radius:15px;
            background-color: rgba(0,0,0,.5);
            color:white;
            box-shadow: 0px 10px 20px black;
            padding:15px;
          }
      `}</style>
      <h1>Leaderboard Test</h1>
      <div className="board">
        {scores.map((user, index) =>
          <Leaders name={user.name}
            score={user.score}
            key={index}
          />
        )}
      </div>
    </div>
  );
}


export default Leaderboard;
