import React from 'react';
import Header from './Header';
import Gameboard from './Gameboard'
import { Switch, Route } from 'react-router-dom';

function App(){

  function randColor(){
    var colorNumber = Math.floor(100000 + Math.random()*900000);
    var color = '#'+colorNumber.toString();
    return color;
  }

  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Dokdo" rel="stylesheet"/>
      <style global jsx>{`
        *{
          background-color: ${randColor()};
        }
        *:hover{
          background-color: ${randColor()};
          color: white;
        }
        html{
          font-family: 'Dokdo', cursive;
        }
      `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={Gameboard} />
      </Switch>
    </div>
  );
}

export default App;
