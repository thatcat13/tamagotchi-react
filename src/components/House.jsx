import React from 'react';
import Display from './Display';
import Actions from './Actions';
import bg from './../assets/images/bg.jpg'

function House() {
  life: []
  homeAddFood(){
    let newLife = this.state.life.slice();
    newLife += 10;
    this.setState({life: newLife});
    alert(newLife);
  }

  return(
    <div>
      <style jsx>
        {`
        .container{
          background-image: url(${bg});
          width: 1280px;
          height: 720px;
          background-repeat: no-repeat;

        }
      `}
      </style>
      <div className='container'>
        <Display/>
        <Actions passedAddFood={this.homeAddFood}/>
      </div>
    </div>
  );
}

export default House;
