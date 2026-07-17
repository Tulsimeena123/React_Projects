import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  let [counter,setCounter]=useState(15)

  //let counter=15

  const addValue=() =>{
    //console.log("clicked",counter);
    //ye task mila tha ki value 20 se uper na jaye click karne pe 
    //if(counter<20)
    setCounter(counter+1)
  }

const removeValue=() =>{
  //ye task tha ki value click karne pe 0 se niche na jaye
  //if(counter>0)
  setCounter(counter-1)

}


  return (
    <>
      <h1>Tulsi aur react</h1>
      <h2>Counter valuue: {counter}</h2>

      <button
      onClick={addValue}
      >Add value{counter}</button>
      <br />
      <button
      onClick={removeValue}
      >remove value{counter}</button>
      <p>footer: {counter}</p>

    </>
  )
}

export default App
