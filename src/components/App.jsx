import React from 'react';
import Header from './Header';
import ContentContainer from './ContentContainer';
import randColor from './RandColor';
import Leaderboard from './Leaderboard';
import { Switch, Route } from 'react-router-dom';

function App(){

  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Cute+Font" rel="stylesheet"/>
      <style global jsx>{`
        html{
          animation: rgb 20s infinite alternate;
          font-family: 'Cute Font', cursive;
        }
        @keyframes rgb {
          0%   {background-color:${randColor()};}
          25%  {background-color:${randColor()};}
          50%  {background-color:${randColor()};}
          75%  {background-color:${randColor()};}
          100% {background-color:${randColor()};}
        }
      `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={ContentContainer}/>
        <Route exact path='/leaderboard' component={Leaderboard}/>
      </Switch>
    </div>
  );
}

export default App;
