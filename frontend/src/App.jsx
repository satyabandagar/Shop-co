import { useState } from 'react'
import './App.css'
import Hender from './componet/Hender'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Hender/>
   </>
  )
}

export default App
