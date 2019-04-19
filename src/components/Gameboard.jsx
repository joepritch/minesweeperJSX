import React from 'react';
import { Link } from 'react-router-dom';
import Cell from './Cell'

const cells = [
  {
    mine: 'true'
  },
  {
    mine: 'false'
  },
  {
    mine: 'true'
  },
  {
    mine: 'false'
  },
  {
    mine: 'true'
  },
  {
    mine: 'false'
  },
  {
    mine: 'false'
  },
  {
    mine: 'false'
  },
  {
    mine: 'false'
  },
  {
    mine: 'false'
  },
  {
    mine: 'false'
  },
  {
    mine: 'false'
  },
  {
    mine: 'false'
  },
  {
    mine: 'false'
  },
  {
    mine: 'false'
  },
  {
    mine: 'false'
  },
  {
    mine: 'false'
  },
  {
    mine: 'false'
  },
  {
    mine: 'false'
  },
  {
    mine: 'false'
  },
  {
    mine: 'false'
  },
  {
    mine: 'false'
  },
  {
    mine: 'false'
  },
  {
    mine: 'false'
  },
  {
    mine: 'false'
  }
]

function Gameboard(){

  return(
    <div>
      <style jsx>{`
      .minefield{
        display: grid;
        grid-template-area:
        "cell1 cell2 cell3 cell4 cell5"
        "cell6 cell7 cell8 cell9 cell10"
        "cell11 cell12 cell13 cell14 cell15"
        "cell16 cell17 cell18 cell19 cell20"
        "cell21 cell22 cell23 cell24 cell25";
        border: solid 3px white;
      }
    `}</style>
      <div className="minefield">
        {cells.map((cell, index) =>
          <Cell mine={cell.mine}
            key={index}/>
        )}
      </div>
      <h1>test</h1>
    </div>
  )
}


export default Gameboard;
