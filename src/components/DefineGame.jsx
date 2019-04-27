import React from 'react';

function DefineGame(props){

  let _height = 0;
  let _width = 0;
  let _mines = 0;

  function passBack(){
    props.onGrabUserInput(_height.value, _width.value, _mines.value);
  }

  return(
    <div>
      <form onSubmit={passBack}>
        <h1>Define height</h1>
        <input id="height" type="number" ref={(input) => {_height = input;}} required></input>
        <h1>Define width</h1>
        <input id="width" type="number" ref={(input) => {_width = input;}} required></input>
        <h1>Define amount of mines</h1>
        <input id="mines" type="number" ref={(input) => {_mines = input;}} required></input>
        <button type='submit'>Generate</button>
      </form>
    </div>
  );
}

export default DefineGame;
