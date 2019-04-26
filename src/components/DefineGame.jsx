import React from 'react';
import Gameboard from './Gameboard'

class DefineGame extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      minefield: {
        height: 0,
        width: 0,
        mines: 0
      }
    }
  }

  createField(){
    event.preventDefault();
    let newMinefield = Object.assign({}, this.state.minefield);
    newMinefield.height = height;
    newMinefield.width = width;
    newMinefield.mines = mines;
    this.setState({minefield: newMinefield});
  }

  render(){
    return(
      <div>
        <form onSubmit={this.createField}>
          <h1>Define height</h1>
          <input id="height" type="number" required></input>
          <h1>Define width</h1>
          <input id="width" type="number" required></input>
          <h1>Define amount of mines</h1>
          <input id="mines" type="number" required></input>
          <button type='submit'>Generate</button>
        </form>
        <Gameboard minefield={this.state.minefield}/>
      </div>
    )
  }
}

export default DefineGame;
