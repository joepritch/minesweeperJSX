import React from 'react';
import PropTypes from 'prop-types';

function Leaders(props){

  var url = location.hash;
  console.log(url);

  if (url == '#/') {
    return(
      <div>
        <style jsx>{`
            hr{
              border:solid 1px blue;
            }

                `}</style>
        <h1>{props.name}</h1>
        <hr/>
      </div>

    );
  } else if (url == '#/leaderboard') {
      return(
        <div>
          <style jsx>{`
              hr{
                border:solid 1px blue;
              }
              `}</style>
            <h1>{props.name}</h1>
            <h3>{props.score}</h3>
            <hr/>
          </div>
        );
  } else {
    return (
      <div>
        <style jsx>{`
            hr{
              border:solid 1px blue;
            }

                `}</style>
              <h1>How did you get here</h1>
              <h1>(location.hash)</h1>
        <hr/>
      </div>

    );
  }

}

Leaders.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired
};

export default Leaders;
