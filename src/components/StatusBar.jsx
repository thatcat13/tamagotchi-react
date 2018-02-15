import React from 'react';
import PropTypes from 'prop-types';


function StatusBar(props) {
  function test(){
    if (props.statusPassedLife <= 75) {
      let bar4 = true;
    }
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
      <h1>Status Bar {props.statusPassedLife}</h1>
      <div className='mainBar'>
        <div className='bar1 bar'>

        </div>
        <div className='bar2 bar'>

        </div>
        <div className='bar3 bar'>

        </div>
        <div className='bar4 bar'>

        </div>
      </div>
    </div>
  );
}
StatusBar.propTypes = {
  statusPassedLife: PropTypes.number
};
export default StatusBar;
