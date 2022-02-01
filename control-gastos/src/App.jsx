import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresepuesto, setIsValidPresepuesto] = useState(false)


  return (
   <div>
      <Header 
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      isValidPresepuesto={isValidPresepuesto}
      setIsValidPresepuesto={setIsValidPresepuesto}

      />
   </div>
   
  )
}

export default App
