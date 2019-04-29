import React from 'react';
import Minefield from './Minefield';
import Cell from './Cell';
import Leaderboard from './Leaderboard';
import DefineGame from './DefineGame'

class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      minefieldSpecs: {
        height: 5,
        width: 5,
        mines: 5
      },
      cellArray: [],
      userInputDisplayed: true
    }
    this.handleGrabUserInput = this.handleGrabUserInput.bind(this);
  }

  componentDidMount(){
    this.generateCells();
  }

  generateCells(){
    var cellCount = (this.state.minefieldSpecs.height * this.state.minefieldSpecs.width);
    var newCellArray = [];
    for (var i = 0; i < cellCount; i++) {
      var y = Math.floor((i/this.state.minefieldSpecs.width));
      var x = i % this.state.minefieldSpecs.width;
      var cell = {xPOS: x, yPOS: y, mine: false};
      newCellArray.push(cell);
    }
    console.log(newCellArray);
    this.setState({cellArray: newCellArray});
  }

  async handleGrabUserInput(height, width, mines){
    var newMinefield = Object.assign({}, this.state.minefieldSpecs);
    newMinefield.height = height;
    newMinefield.width = width;
    newMinefield.mines = mines;
    await this.setState({minefieldSpecs: newMinefield});
    this.generateCells();
  }



  render(){
    let content = null;
    if (this.state.userInputDisplayed) {
      content = <DefineGame onGrabUserInput={this.handleGrabUserInput}/>
    }
    return(
    <div>
      {content}
      <Minefield minefieldSpecs={this.state.minefieldSpecs}
        cellArray={this.state.cellArray}/>
      <Leaderboard/>
    </div>
    )
  }
}

export default Game;
