import React from 'react';
import Display from './Display';
import Actions from './Actions';
import bg from './../assets/images/bg.jpg';

class House extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      life: 100
    };
    this.homeAddFood = this.homeAddFood.bind(this);
    this.homeAddSleep = this.homeAddSleep.bind(this);
    this.homeAddPlay = this.homeAddPlay.bind(this);
  }
  homeAddFood(){
    let foodLife = this.state.life;
    foodLife += 10;
    if (foodLife > 100) {
      foodLife = 100;
    }
    this.setState({life: foodLife});

  }
  homeAddSleep(){
    let sleepLife = this.state.life;
    sleepLife += 30;
    if (sleepLife > 100) {
      sleepLife = 100;
    }
    this.setState({life: sleepLife});

  }
  homeAddPlay(){
    let playLife = this.state.life;
    playLife += 5;
    if (playLife > 100) {
      playLife = 100;
    }
    this.setState({life: playLife});

  }
  homeUpdate(){
    let updateLife = this.state.life;
    if(updateLife === 0){
      alert('You Killed Lil Dude Oh Noes!')
      clearInterval(this.updateTime)
    } else {
      updateLife --;
    }
    this.setState({life: updateLife});
  }
  componentDidMount() {
    this.updateTime= setInterval(() =>
    this.homeUpdate(), 3000);
  }

  render() {
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
          <Display passedLife={this.state.life}/>
          <Actions passedAddFood={this.homeAddFood} passedAddSleep={this.homeAddSleep} passedAddPlay={this.homeAddPlay}/>
        </div>
      </div>
    );

  }
}

export default House;
