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
        mines: 10
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
    this.setState({cellArray: []})
    var cellCount = (this.state.minefieldSpecs.height * this.state.minefieldSpecs.width);
    var newCellArray = [];
    for (var i = 0; i < cellCount; i++) {
      var y = Math.floor((i/this.state.minefieldSpecs.width));
      var x = i % this.state.minefieldSpecs.width;
      var cell = {xPOS: x, yPOS: y, mine: false};
      newCellArray.push(cell);
    }
    this.determineMines(newCellArray);
  }

  determineMines(newCellArray){
    let mines = [];
    let cellArray = newCellArray.slice(0);
    while (mines.length < this.state.minefieldSpecs.mines ) {
      let index = Math.floor(Math.random()*cellArray.length);
      mines.push(cellArray.splice(index,1)[0]);
    }
    this.insertMines(newCellArray,mines)
  }

  insertMines(newCellArray, mines){
    for (var i = 0; i < newCellArray.length; i++) {
      for (var j = 0; j < mines.length; j++) {
        if (newCellArray[i].xPOS == mines[j].xPOS && newCellArray[i].yPOS == mines[j].yPOS) {
          newCellArray[i].mine = true;
        }
      }
    }
    this.setState({cellArray: newCellArray})
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
        cellArray={this.state.cellArray} onCellClicked={this.handleCellClicked}/>
      <Leaderboard/>
    </div>
    )
  }
}

export default Game;
