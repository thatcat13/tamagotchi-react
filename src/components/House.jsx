import React from 'react';
import Display from './Display';
import Actions from './Actions';
import bg from './../assets/images/bg.jpg';

class House extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      life: 78
    };
    this.homeAddFood = this.homeAddFood.bind(this);
    this.homeAddSleep = this.homeAddSleep.bind(this);
    this.homeAddPlay = this.homeAddPlay.bind(this);
  }
  homeAddFood(){
    let foodLife = this.state.life;
    foodLife += 10;
    this.setState({life: foodLife});
    console.log(foodLife);
  }
  homeAddSleep(){
    let sleepLife = this.state.life;
    sleepLife += 30;
    this.setState({life: sleepLife});
    console.log(sleepLife);
  }
  homeAddPlay(){
    let playLife = this.state.life;
    playLife += 5;
    this.setState({life: playLife});
    console.log(playLife);
  }
  homeUpdate(){
    let updateLife = this.state.life;
    if(updateLife === 0){
      alert('You Have Killed Lil Dude')
      clearInterval(this.updateTime)
    } else {
      updateLife --;
    }
    this.setState({life: updateLife});
  }
  componentDidMount() {
    this.updateTime= setInterval(() =>
    this.homeUpdate(), 1000);
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
