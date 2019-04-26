import React from 'react';
import Minefield from './Minefield';
import DefineGame from './DefineGame';

class ContentContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      gameDisplayed: true
    }
    this.handleStartNewGame = this.handleStartNewGame.bind(this);
  }

  handleStartNewGame(){
    var newGame = false;
    this.setState({gameDisplayed: newGame});
  }

  render(){
    let content = null;
    if (this.state.gameDisplayed) {
      content = <Minefield onNewGame={this.handleStartNewGame}/>
    } else {
      content = <DefineGame/>
    }
    return(
    <div>
      {content}
    </div>
    )
  }
}

export default ContentContainer;
