import React from 'react';
import PropTypes from 'prop-types';
import randColor from './RandColor';

function Cell(props){


  return(
    <div id={props.id} className="cell">
      <style jsx>{`
          .cell{
            grid-column: ${props.id};
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
      <h1>{props.mine} {props.id}</h1>
    </div>
  );
}

Cell.propTypes = {
  mine: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};

export default Cell;
