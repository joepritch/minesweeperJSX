import React from 'react';
import PropTypes from 'prop-types';

function Leaders(props){


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

  )
}

Leaders.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired
};

export default Leaders;
