import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import {incrNumber, decrNumber} from "./actions/index"

const App = () => {
  const myState = useSelector((state)=>state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Increment/Decrement Counter</h1>
      <h4>Using React and Redux</h4>

      <div className="quantity">
        <a className="quantity_minus" title='Decrement' onClick={ ()=> dispatch(decrNumber()) }><span>-</span></a>
        <input name='quantity' type="text" className="quantity_input" value={myState}/>
        <a className="quantity_plus" title='Increment' onClick={ ()=> dispatch(incrNumber(5)) }><span>+</span></a>
      </div>
    </div>
  )
}

export default App
