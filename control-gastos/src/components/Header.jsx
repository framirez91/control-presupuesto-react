import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'
const Header = ({ presupuesto, setPresupuesto, isValidPresepuesto, setIsValidPresepuesto }) => {
    return <header>
        <h1>Planificador de Gastos</h1>
        {isValidPresepuesto ? (
            <ControlPresupuesto
            presupuesto={presupuesto}
            
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
