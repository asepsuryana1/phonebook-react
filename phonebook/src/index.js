import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import PhoneBox from './components/PhoneBox';
import reportWebVitals from './reportWebVitals';
import App from './App';

//import React, { Component } from 'react';

// class Counter extends Component {
//   state = { value: 0 };

//   increment = () => {
//     this.setState(prevState => ({
//       value: prevState.value + 1
//     }));
//   };

//   decrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value - 1
//     }));
//   };
  
//   render() {
//     return (
//       <div>
//         {this.state.value}
//         <button onClick={this.increment}>+</button>
//         <button onClick={this.decrement}>-</button>
//       </div>
//     )
//   }
// }
// import React, { Component } from 'react';

// const counter = (state = { value: 0 }, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { value: state.value + 1 };
//     case 'DECREMENT':
//       return { value: state.value - 1 };
//     default:
//       return state;
//   }
// }

// class Counter extends Component {
//   state = counter(undefined, {});
  
//   dispatch(action) {
//     this.setState(prevState => counter(prevState, action));
//   }

//   increment = () => {
//     this.dispatch({ type: 'INCREMENT' });
//   };

//   decrement = () => {
//     this.dispatch({ type: 'DECREMENT' });
//   };
  
//   render() {
//     return (
//       <div>
//         {this.state.value}
//         <button onClick={this.increment}>+</button>
//         <button onClick={this.decrement}>-</button>
//       </div>
//     )
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
