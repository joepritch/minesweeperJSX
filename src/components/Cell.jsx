import React from 'react';
import PropTypes from 'prop-types';

function Cell(props){

  return(
    <div className="cell">
      <style jsx>{`
          .cell{
            grid-column: ${props.xPOS +1};
            grid-row: ${props.yPOS +1};
            width:30px;
            height:30px;
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
        <p>{props.xPOS} {props.yPOS}</p>
    </div>
  );
}


export default Cell;
