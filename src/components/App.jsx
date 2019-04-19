import React from 'react';
import Header from './Header';
import Gameboard from './Gameboard';
import { Switch, Route } from 'react-router-dom';

function randColor(){
  var colorNumber = Math.floor(100000 + Math.random()*900000);
  var color = '#'+colorNumber.toString();
  return color;
}

function App(){

  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Dokdo" rel="stylesheet"/>
      <style global jsx>{`
        body{
          background-color: ${randColor()};
        }
        body:hover{
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
