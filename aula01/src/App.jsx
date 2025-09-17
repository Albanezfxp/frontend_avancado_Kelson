import React from 'react'
import Addition from './components/Addition'
import Division from './components/Division'
import Subtraction from './components/Subtraction'
import Multiplication from './components/Multiplication'


const App = () => {
  return (
    <div>
      <Addition num1={2} num2={3}/>
      <Division num1={16} num2={8}/>
      <Subtraction num1={3} num2={1}/>
      <Multiplication num1={3} num2={2}/>
      <PrecisoEstudar nomeDaTecnologia="React"/>
    </div>
  )
}

export default App