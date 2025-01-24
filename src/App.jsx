import { useState } from 'react'
import './App.css'
import Crl from './Crl'
import Whatsapp from './Whatsapp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Crl/>
      <Whatsapp/>
    </>
  )
}

export default App
