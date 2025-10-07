import { useState } from 'react'
import './App.css'
import WorkWithImage from './components/WorkWithImage'
import Exercicio2 from './components/Exercicio2'
import Campanha from './components/Campanha'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div>
      <WorkWithImage/>
      <Exercicio2/>
      <Campanha mes="novembro"/>
    </div>
  </>  
)
}

export default App