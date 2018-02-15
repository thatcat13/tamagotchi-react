import React from 'react';
import PropTypes from 'prop-types';

function StatusBar(props) {
  let bar4, bar3, bar2, bar1, header={};
  
  if (props.statusPassedLife <= 75) {
    bar4 = {
      backgroundColor: '#94bc7d'
    };
  }
  if (props.statusPassedLife <= 50){
    bar3 = {
      backgroundColor: '#94bc7d'
    };
  }
  if (props.statusPassedLife <= 25){
    bar2 = {
      backgroundColor: '#94bc7d'
    };
    header = {
      color: 'red'
    };
  }
  if (props.statusPassedLife === 0){
    bar1 = {
      backgroundColor: '#94bc7d'
    };
  }

  return(
    <div>
      <style jsx>
        {`
          h1{
            color: white;
            text-shadow: 3px 2px 3px black;
          }
          .mainBar{
            height:50px;
            width:400px;
            background-color: #94bc7d;
            border-radius: 5px;
            border: 2px Solid #1f3c68;
            display: flex;
            box-shadow: 1px 1px 1px purple;
          }
          .bar{
            height:100%;
            width:25%;
            background-color: #d433e3;
            border: 1px Solid #1f3c68;
          }
        `}
      </style>
      <h1 style={header}>Health: {props.statusPassedLife}</h1>
      <div className='mainBar'>
        <div  style={bar1} className='bar'></div>
        <div  style={bar2} className='bar'></div>
        <div  style={bar3} className='bar'></div>
        <div style={bar4} className='bar'></div>
      </div>
    </div>
  );
}

StatusBar.propTypes = {
  statusPassedLife: PropTypes.number
};

export default StatusBar;
