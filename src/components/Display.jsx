import React from 'react';
import StatusBar from './StatusBar';
import LilDude from './LilDude';
import PropTypes from 'prop-types';

function Display(props) {
  return(
    <div>

      <StatusBar statusPassedLife={props.passedLife}/>
      <LilDude charPassedLife={props.passedLife} charPassedDude={props.passedDude}/>
    </div>
  );
}
Display.propTypes = {
  passedLife: PropTypes.number,
  passedDude: PropTypes.string
};
export default Display;
