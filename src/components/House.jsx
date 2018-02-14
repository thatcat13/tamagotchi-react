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
  }
  homeAddFood(){
    let newLife = this.state.life;
    newLife += 10;
    this.setState({life: newLife});
    console.log(newLife);
  }
  homeAddSleep(){
    let newLife = this.state.life;
    newLife += 30;
    this.setState({life: newLife});
    console.log(newLife);
  }
  homeAddPlay(){
    let newLife = this.state.life;
    newLife += 5;
    this.setState({life: newLife});
    console.log(newLife);
  }
  // componentDidMount() {
  //   this.health = setInterval(() => {
  //     if(this.health === 0){
  //       return this.health;
  //     } else {
  //       this.health --;
  //     }
  //   }, 4000);
  // }
  //
  //
  // componentWillUnmount(){
  //   clearInterval(this.health);
  // }
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
          <Display/>
          <Actions passedAddFood={this.homeAddFood} passedAddSleep={this.homeAddSleep} passedAddPlay={this.homeAddPlay}/>
        </div>
      </div>
    );

  }
}

export default House;
