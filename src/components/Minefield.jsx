import React from 'react';
import Cell from './Cell';
import Leaderboard from './Leaderboard';

function Minefield(props){

  return(
    <div>
      <style jsx>{`
        .minefield{
          display: grid;
          width: ${props.minefieldSpecs.width * 30}px;
          height: ${props.minefieldSpecs.height * 30}px;
          grid-template-columns: repeat(${props.minefieldSpecs.height}, 30px);
          grid-template-rows: repeat(${props.minefieldSpecs.width}, 30px);
          border: outset 5px white;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
        }
        `}</style>
      <div className='minefield'>
        {props.cellArray.map((cell, index) =>
          <Cell
            xPOS = {cell.xPOS}
            yPOS = {cell.yPOS}
            mine = {cell.mine}
            key = {index}
            />
        )}
      </div>
    </div>
  );
}


export default Minefield;
