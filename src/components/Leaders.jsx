import React from 'react';
import PropTypes from 'prop-types';

function Leaders(props){

  var url = location.hash;
  var score = (<h3>{props.score}</h3>);

  function htmlBuilder(html){
    return(
      <div>
        <style jsx>{`
            hr{
              border:solid 1px blue;
            }
            `}</style>
        <h1>{props.name}</h1>
        {html}
        <hr/>
      </div>
    );
  }

  if (url == '#/') {
    return htmlBuilder(null);
  } else if (url == '#/leaderboard') {
    return htmlBuilder(score);
  } else {
    return htmlBuilder('How are you here?');
  }

}

Leaders.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired
};

export default Leaders;
