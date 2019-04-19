import React from 'react';
import Header from './Header';
import Gameboard from './Gameboard';
import randColor from './RandColor';
import { Switch, Route } from 'react-router-dom';

function App(){

  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Dokdo" rel="stylesheet"/>
      <style global jsx>{`
        body{
          background-color: ${randColor()};
          animation: rgb 10s infinite alternate;
        }

        @keyframes rgb {
          0%   {background-color:${randColor()};}
          25%  {background-color:${randColor()};}
          50%  {background-color:${randColor()};}
          75%  {background-color:${randColor()};}
          100% {background-color:${randColor()};}
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
