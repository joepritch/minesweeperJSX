import React from 'react';
import Minefield from './Minefield';
import DefineGame from './DefineGame';

class ContentContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      gameDisplayed: false,
      minefieldSpecs: {
        height: 0,
        width: 0,
        mines: 0
      }
    }
    this.handleStartNewGame = this.handleStartNewGame.bind(this);
  }

  handleStartNewGame(height, width, mines){
    var newMinefieldSpecs = Object.assign({}, this.state.minefieldSpecs);
    newMinefieldSpecs.height = height;
    newMinefieldSpecs.width = width;
    newMinefieldSpecs.mines = mines;
    this.setState({minefieldSpecs: newMinefieldSpecs});
    var newGame = true;
    this.setState({gameDisplayed: newGame});
  }

  render(){
    let content = null;
    if (this.state.gameDisplayed) {
      content = <Minefield minefieldSpecs={this.state.minefieldSpecs}/>
    } else {
      content = <DefineGame onNewGame={this.handleStartNewGame}/>
    }
    return(
    <div>
      {content}
    </div>
    )
  }
}

export default ContentContainer;
