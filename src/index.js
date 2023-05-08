import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// incrementBtn.addEventListener('click', () => {
  //    let value = counterDisplay.value
  //    let newValue = Number(value) + 1 ; 
  //    counterDisplay.value = newValue
  // })
  // decrementBtn.addEventListener('click', () => {
    //   let value = counterDisplay.value
    //   let newValue = Number(value) - 1 ; 
    //   counterDisplay.value = newValue
    // })
//     import { createStore } from 'redux'
    
//     const reducer  = (state = 0, action) =>{
//       switch(action.type){
//         case 'INC':
//           return state +1
//           case 'DEC': 
//           return state - 1
//           default:
//             return state
//           }
//         }
        
//         let counterDisplay = document.querySelector('#counter_display')
//         let incrementBtn = document.querySelector('#increment')
//         let decrementBtn = document.querySelector('#decrement')
// const store =  createStore(reducer)
// const increment = {
//   type: 'INC'
// }
// const decrement = {
//   type: 'DEC'
// }
// console.log('--1--' , store.getState());

// store.dispatch(increment)

// incrementBtn.addEventListener('click', () =>{
//   store.dispatch(increment)
//   let value = store.getState();
//   counterDisplay.value = value
// })
// decrementBtn.addEventListener('click', () =>{
//   store.dispatch(decrement)
//   let value = store.getState();
//   counterDisplay.value = value
// // })
// incrementBtn.addEventListener('click', () => {store.dispatch(increment)})
// decrementBtn.addEventListener('click', () => {store.dispatch(decrement)})
// store.subscribe(()=> {counterDisplay.value = store.getState()})

