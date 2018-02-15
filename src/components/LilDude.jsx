import React from 'react';
import lildude from './../assets/images/lildude.png';
import lilDeath from './../assets/images/lilDeath1.jpg';
import lilYellowDude from './../assets/images/lildude2.png';
import PropTypes from 'prop-types';

function LilDude(props) {
  let character = props.charPassedDude;
  if (props.charPassedLife === 0){
    character = lilDeath;
  }
  return(
    <div>
      <style jsx>
        {`
          .imgArea{
            width:100%;
            height:100%;
            position: relative;


          }
          @keyframes moving {
              0%   {left: 53%;}
              25%  {left: 33%;}
              50%  {left: 13%;}
              100% {left: 23%;}
          }

          img{
            position: absolute;
            height:300px;
            width: auto;
            top: 240px;
            left: 50%;
            animation-name: moving;
            animation-duration: 10s;
            animation-direction: alternate;
            animation-iteration-count: infinite;
          }
        `}
      </style>
      <div className='imgArea'>
        <img src={character}/>
      </div>
    </div>
  );
}

LilDude.propTypes = {
  charPassedLife: PropTypes.number,
  charPassedDude: PropTypes.string
};

export default LilDude;
