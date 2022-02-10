import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'
const Header = ({
    presupuesto,
    setPresupuesto,
    isValidPresepuesto,
    setIsValidPresepuesto,
    gastos,
    setGastos
}) => {
    return <header>
        <h1>Planificador de Gastos</h1>
        {isValidPresepuesto ? (
            <ControlPresupuesto
                presupuesto={presupuesto}
                setGastos={setGastos}
                gastos={gastos}
                setPresupuesto={setPresupuesto}
                setIsValidPresepuesto={setIsValidPresepuesto}

            />
        ) : (
            <NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValidPresepuesto={setIsValidPresepuesto}


            />)}



    </header>
}

export default Header
