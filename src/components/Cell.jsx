import React from 'react';

function Cell(props){
  console.log(props.id);


  return(
    <div>
      <style jsx>{`
      .cell{
        grid-area: ('cell'+(${props.id}+1));
        width:75px;
        height:75px;
        border:solid 1px black;
        box-sizing:border-box;
      }
    `}</style>
      <div className="cell">
        <h1>{props.mine}</h1>
        <p>{props.key}</p>
      </div>
    </div>
  );
}
export default Cell;
