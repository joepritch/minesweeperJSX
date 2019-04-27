import React from 'react';
import PropTypes from 'prop-types';

function Cell(props){
  console.log("cells loaded");

  return(
    <div className="cell">
      <style jsx>{`
          .cell{
            grid-column: ${props.yPOS};
            grid-row: ${props.xPOS};
            width:50px;
            height:50px;
            border:outset 5px lightgrey;
            box-sizing:border-box;
            background-color:darkgrey;
            font-size:10px;
          }
          .cellClicked{
            background-color:lightgrey;
            border:solid 1px darkgrey;
          }
          `}</style>
      <h1>{props.mine}</h1>
    </div>
  );
}


export default Cell;
