import React from 'react';
import PropTypes from 'prop-types';

function Cell(props){

  function test(){

    alert(id)
  }


  return(
    <div>
      <style jsx>{`
      .cell{
        grid-area: ('cell'+(${props.id}+1));
        width:50px;
        height:50px;
        border:groove 5px lightgrey;
        box-sizing:border-box;
        background-color:darkgrey;
        font-size:10px;
      }
      .cellClicked{
        background-color:lightgrey;
        border:solid 1px darkgrey;
      }
    `}</style>
      <div onClick={test} id={props.id} className="cell">
        <h1>{props.mine} {props.id}</h1>
      </div>
    </div>
  );
}

Cell.propTypes = {
  mine: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};

export default Cell;
