import { useState } from 'react'
import './App.css'
import ResgatandoDados from './components/ResgatandoDados'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <ResgatandoDados/>
    </div>
  )
}

export default App