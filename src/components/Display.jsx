import React from 'react';
import StatusBar from './StatusBar';
import LilDude from './LilDude';
import PropTypes from 'prop-types';

function Display(props) {
  return(
    <div>

      <StatusBar statusPassedLife={props.passedLife}/>
      <LilDude/>
    </div>
  );
}
Display.propTypes = {
  passedLife: PropTypes.number
};
export default Display;
