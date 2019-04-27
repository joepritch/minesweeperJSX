import React from 'react';
import Cell from './Cell';
import Leaderboard from './Leaderboard';

class Minefield extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      minefield: {
        height: 0,
        width: 0,
        mines: 0
      },
      cellArray: [{xPOS: 0, yPOS: 0, mine:false}]
    };
  }

  generateCells(){
    var cellCount = (this.state.minefield.height * this.state.minefield.width);
    var newCellArray = [];
    for (var i = 0; i < cellCount; i++) {
      var y = Math.floor((i/this.state.minefield.width));
      var x = i % this.state.minefield.width;
      var cell = {xPOS: x, yPOS: y, mine: false};
      newCellArray.push(cell);
    }
  }

  componentWillReceiveProps(props){
    var newMinefield = Object.assign({}, this.state.minefield);
    newMinefield.height = props.minefieldSpecs.height;
    newMinefield.width = props.minefieldSpecs.width;
    newMinefield.mines = props.minefieldSpecs.mines;
    this.setState({minefield: newMinefield});
    this.generateCells();
  }


  render(){
    return(
      <div>
        <style jsx>{`
          .minefield{
            display: grid;
            width: ${this.state.minefield.width * 50}px;
            height: ${this.state.minefield.height * 50}px;
            grid-template-columns: repeat(${this.state.minefield.height}, 50px);
            grid-template-rows: repeat(${this.state.minefield.width}, 50px);
            border: outset 5px white;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
          }
          `}</style>
        <div className='minefield'>
          {this.state.cellArray.map((cell, index) =>
            <Cell
              xPOS = {cell.xPOS}
              yPOS = {cell.yPOS}
              mine = {cell.mine}
              key = {index}
              />
          )}
        </div>
        <Leaderboard/>
      </div>
    );
  }
}


export default Minefield;
