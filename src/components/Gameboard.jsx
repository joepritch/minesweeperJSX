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
        grid-template-areas:
        "cell1 cell2 cell3 cell4 cell5"
        "cell6 cell7 cell8 cell9 cell10"
        "cell11 cell12 cell13 cell14 cell15"
        "cell16 cell17 cell18 cell19 cell20"
        "cell21 cell22 cell23 cell24 cell25";
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
