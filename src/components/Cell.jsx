import React from 'react';

function Cell(props){
  console.log(props.key);
  return(
    <div>
      <style jsx>{`
      .cell{
        width:75px;
        height:75px;
        border:solid 1px black;
      }
    `}</style>
      <div className="cell">
        <h1>{props.mine}</h1>
        <p>{props.key}</p>
      </div>
    </div>
  )
}
export default Cell;
