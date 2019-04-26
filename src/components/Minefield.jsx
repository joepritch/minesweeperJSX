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
        mines: []
      }
    };
  }

  render(props){
    return(
      <div>
        <style jsx>{`
          .minefield{
            display: grid;
            grid-template: repeat(5, 50px);
            border: outset 5px white;
          }
          `}</style>
        <button>test</button>
        <Leaderboard/>
      </div>
    );
  }
}


export default Minefield;
