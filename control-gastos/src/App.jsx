import { useState, useEffect } from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import { generarId } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {
  const [gastos, setGastos] = useState([])
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresepuesto, setIsValidPresepuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastoEditar, setGastoEditar] = useState({})
  useEffect(() =>{},
  [])
  
  const handleNuevoGasto = () => {
    setModal(true)
    setTimeout(() => {
      setAnimarModal(true)

    }, 500);
  }


  const guardarGasto = gasto =>{
    gasto.id = generarId()
    gasto.fecha = Date.now()
    setGastos([...gastos, gasto])

    setAnimarModal(false)//para que se cierre el modal

        setTimeout(() => {
            setModal(false)
      
          }, 500)
  }



  return (
    <div className={modal ? 'fijar':''}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresepuesto={isValidPresepuesto}
        setIsValidPresepuesto={setIsValidPresepuesto}

      />

      {isValidPresepuesto && (
      <>
      <main>
        <ListadoGastos 
        gastos={gastos}
        setGastoEditar={setGastoEditar}
        
        />


      </main>
      <div className='nuevo-gasto'>
        <img
          src={IconoNuevoGasto}
          alt="IconoNuevoGasto"
          onClick={handleNuevoGasto}
        />
      </div>
       </> // si el presupuesto es valido, entonces se muestra el componente NuevoGasto
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}

        />)}


    </div>


  )
}

export default App
