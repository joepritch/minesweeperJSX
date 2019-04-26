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
    };
  }

  componentWillReceiveProps(props){
    console.log(props.minefield);
    var newMinefield = Object.assign({}, this.state.minefield)
    newMinefield.height = props.minefieldSpecs.height;
    newMinefield.width = props.minefieldSpecs.width;
    newMinefield.mines = props.minefieldSpecs.mines;
    this.setState({minefield: newMinefield})
  }

  render(props){
    return(
      <div>
        <style jsx>{`
          .minefield{
            display: grid;
            width: ${this.state.minefield.width * 50}px;
            grid-template-columns: repeat(${this.state.minefield.height}, 50px);
            grid-template-rows: repeat(${this.state.minefield.width}, 50px);
            border: outset 5px white;
          }
          `}</style>
        <div className='minefield'>

        </div>
        <Leaderboard/>
      </div>
    );
  }
}


export default Minefield;
