import { useState } from 'react'
import './App.css'
import Hender from './componet/Hender'
import HeroSection from './componet/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Hender/>
   <HeroSection/>
   </>
  )
}

export default App
