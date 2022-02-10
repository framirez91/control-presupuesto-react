import { useState, useEffect } from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import { generarId } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []


  )
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  )
  const [isValidPresepuesto, setIsValidPresepuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastoEditar, setGastoEditar] = useState({})

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true)
      setTimeout(() => {
        setAnimarModal(true)

      }, 500);

    }
  }, [gastoEditar])

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])

  useEffect(() => {
    if (presupuesto > 0) {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0
    if(presupuestoLS > 0){
      setIsValidPresepuesto(true)
    }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos)??[])  

  },[gastos])

  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})


    setTimeout(() => {
      setAnimarModal(true)

    }, 500);
  }
  const eliminarGasto = id => {
   const gastosAcatualizados = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosAcatualizados)
    
  }


  const guardarGasto = gasto => {
    if (gasto.id) {
      //actualizar el gasto
      const gastoActualizados = gastos.map( gastoState => gastoState.id ===
       gasto.id ? gasto : gastoState)
      setGastos(gastoActualizados)
      setGastoEditar({})
    } else {
      //agregar gasto
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }



    setAnimarModal(false)//para que se cierre el modal

    setTimeout(() => {
      setModal(false)

    }, 500)
  }



  return (
    <div className={modal ? 'fijar' : ''}>
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
              eliminarGasto={eliminarGasto}

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
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}

        />)}


    </div>


  )
}

export default App
