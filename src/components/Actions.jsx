import React from 'react';
import PropTypes from 'prop-types';


function Actions(props) {

  function actionAddFood(){
    props.passedAddFood();
  }
  function actionAddSleep(){
    props.passedAddSleep();
  }
  function actionAddPlay(){
    props.passedAddPlay();
  }

  const mainDiv = {
    display: 'flex',
    height: '87%',
    alignItems: 'flex-end',
    marginLeft: '10px'
  };

  const buttonDiv = {
    display: 'flex',
    justifyContent: 'space-around'
  };
  
  const buttonStyle = {
    width: '200px',
    height: '75px',
    borderRadius: '50px',
    fontSize: '1em',
    fontWeight: 'bolder',
    textAlign: 'center',
    backgroundColor: '#fe07cd',
    border: '2px Solid #1f3c68',
    color: 'white',
    textShadow: '2px 1px 2px black',
    margin: '10px'
  };

  return(
    <div style={mainDiv}>
      <div style={buttonDiv}>
        <button onClick={actionAddFood}  style={buttonStyle}>Feed Lil Dude</button>
        <button onClick={actionAddPlay} style={buttonStyle}>Play with Lil Dude</button>
        <button onClick={actionAddSleep} style={buttonStyle}>Put Lil Dude to Bed</button>
      </div>
    </div>
  );
}

Actions.propTypes = {
  passedAddFood: PropTypes.func,
  passedAddSleep: PropTypes.func,
  passedAddPlay: PropTypes.func
};

export default Actions;
