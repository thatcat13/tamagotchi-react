import React from 'react';
import lildude from './../assets/images/lildude.png';


function LilDude() {
  return(
    <div>
      <style jsx>
        {`
          .imgArea{
            width:100%;
            height:100%;
            position: relative;


          }
          img{
            position: absolute;
            height:300px;
            width: auto;
            top: 280px;
            left: 50%;
          }
        `}
      </style>
      <div className='imgArea'>
        <img src={lildude}/>
      </div>
    </div>
  );
}

export default LilDude;
