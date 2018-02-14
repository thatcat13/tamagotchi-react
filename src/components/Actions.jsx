import React from 'react';
import PropTypes from 'prop-types';


function Actions(props) {

  function actionAddFood(){
    props.passedAddFood()
  }


  const mainDiv = {
    display: 'flex',
    height: '87%',
    alignItems: 'flex-end',
    marginLeft: '10px'
  }
  const buttonDiv = {
    display: 'flex',
    justifyContent: 'space-around'
  }
  const buttonStyle = {
    width: '200px',
    height: '75px',
    borderRadius: '50px',
    fontSize: '1em',
    fontWeight: 'bolder',
    textAlign: 'center',
    backgroundColor: '#fe07cd',
    border: '2px Solid #1f3c68',
    color: 'white',
    textShadow: '2px 1px 2px black',
    margin: '10px'

  }
  return(
    <div style={mainDiv}>
      <div style={buttonDiv}>
        <button style={buttonStyle}>Feed Lil Dude</button>
        <button style={buttonStyle}>Play with Lil Dude</button>
        <button style={buttonStyle}>Put Lil Dude to Bed</button>
      </div>
    </div>
  )
//   constructor(props) {
//     super(props);
//     console.log(props);
//     this.addFood = this.addFood.bind(this);
//     this.state = {
//       health: 100,
//     };
//   }
//
//
//
//   componentDidMount() {
//     this.health = setInterval(() => {
//       if(this.health === 0){
//         return this.health;
//       } else {
//         this.health --;
//       }
//     }, 4000);
//   }
//
//
//   componentWillUnmount(){
//     clearInterval(this.health);
//   }
//
//
//   render() {
//     return(
//       <div>
//         <h1>{this.state.health}</h1>
//         <button onClick={this.addFood}> Feed</button>
//       </div>
//     );
//   }
// }
//
// Feed.propTypes = {
//   life: PropTypes.number,
//   addFood: PropTypes.func
// };
};

Actions.propTypes = {
  passedAddFood: PropTypes.func
};

export default Actions;
