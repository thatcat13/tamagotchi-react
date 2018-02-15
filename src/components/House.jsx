import React from 'react';
import Display from './Display';
import Actions from './Actions';
import bg from './../assets/images/bg.jpg';
import lildude from './../assets/images/lildude.png';
import lilYellowDude from './../assets/images/lildude2.png';
import Footer from './Footer';


class House extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      life: 100,
      dude: lildude
    };
    this.homeAddFood = this.homeAddFood.bind(this);
    this.homeAddSleep = this.homeAddSleep.bind(this);
    this.homeAddPlay = this.homeAddPlay.bind(this);
    this.handleChooseLilPinkDude = this.handleChooseLilPinkDude.bind(this);
    this.handleChooseLilYellowDude = this.handleChooseLilYellowDude.bind(this);
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
      alert('You Killed Lil Dude Oh Noes!');
      clearInterval(this.updateTime);
    } else {
      updateLife --;
    }
    this.setState({life: updateLife});
  }

  handleChooseLilPinkDude(){
    let chosenLilPinkDude = this.state.dude;
    chosenLilPinkDude = lildude;
    this.setState({dude: chosenLilPinkDude});
  }

  handleChooseLilYellowDude(){
    let chosenLilYellowDude = this.state.dude;
    chosenLilYellowDude = lilYellowDude;
    this.setState({dude: chosenLilYellowDude});
  }

  componentDidMount() {
    this.updateTime= setInterval(() =>
      this.homeUpdate(), 500);
  }

  render() {
    return(
      <div>
        <style jsx>
          {`
            .one{
              left: 14%;
              top: 12%;
            }
            .two{
              left: 1%;
              top: 12%;
            }
            .button{
              width: 150px;
              height: 55px;
              border-radius: 50px;
              background-color: #fe07cd;
              border: 2px Solid #1f3c68;
              position: absolute;
              margin-top: 8px;
              color: white;
              font-size: 1em;
            }
            .container{
              background-image: url(${bg});
              width: 1280px;
              height: 720px;
              background-repeat: no-repeat;
              position: relative;
            },
            `}
        </style>
        <div className='container'>
          <div className='buttonArea'>
            <button className='button one' onClick={this.handleChooseLilPinkDude} >Choose Pink Dude</button>
            <button className='button two' onClick={this.handleChooseLilYellowDude}>Choose Yellow Dude</button>
          </div>
          <Display passedLife={this.state.life} passedDude={this.state.dude}/>
          <Actions passedAddFood={this.homeAddFood} passedAddSleep={this.homeAddSleep} passedAddPlay={this.homeAddPlay}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default House;
