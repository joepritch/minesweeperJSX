import React from 'react';
import Cell from './Cell';
import Leaderboard from './Leaderboard';

const cells = [
  {
    mine: 1
  },
  {
    mine: 0
  },
  {
    mine: 1
  },
  {
    mine: 0
  },
  {
    mine: 1
  },
  {
    mine: 0
  },
  {
    mine: 0
  },
  {
    mine: 0
  },
  {
    mine: 0
  },
  {
    mine: 0
  },
  {
    mine: 0
  },
  {
    mine: 0
  },
  {
    mine: 0
  },
  {
    mine: 0
  },
  {
    mine: 0
  },
  {
    mine: 0
  },
  {
    mine: 0
  },
  {
    mine: 0
  },
  {
    mine: 0
  },
  {
    mine: 0
  },
  {
    mine: 0
  },
  {
    mine: 0
  },
  {
    mine: 0
  },
  {
    mine: 0
  },
  {
    mine: 0
  }
];

function Gameboard(){

  return(
    <div>
      <style jsx>{`
      .minefield{
        display: grid;
        width:250px;
        grid-template: repeat(5, 50px);
        border: outset 5px white;
      }
    `}</style>
      <div className="minefield">
        {cells.map((cell, index) =>
          <Cell mine={cell.mine}
            id={index}
            key={index}/>
        )}
      </div>
      <Leaderboard/>
    </div>
  );
}


export default Gameboard;
