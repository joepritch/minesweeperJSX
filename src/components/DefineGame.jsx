import React from 'react';

function DefineGame(){

  let _height = null;
  let _width = null;
  let _mines = null;

  function grabSpecs(event){
    event.preventDefault();
  }

  return(
    <div>
      <form onSubmit={grabSpecs}>
        <h1>Define height</h1>
        <input id="height" type="number" ref={(input) => {_height = input;}} required></input>
        <h1>Define width</h1>
        <input id="width" type="number" ref={(input) => {_width = input;}} required></input>
        <h1>Define amount of mines</h1>
        <input id="mines" type="number" ref={(input) => {_mines = input;}} required></input>
        <button type='submit'>Generate</button>
      </form>
    </div>
  )
}

export default DefineGame;
