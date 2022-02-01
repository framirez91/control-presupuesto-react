import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
const Header = ({ presupuesto, setPresupuesto, isValidPresepuesto, setIsValidPresepuesto }) => {
    return <header>
        <h1>Planificador de Gastos</h1>
        {isValidPresepuesto ?(<p>control Presupuesto</p>):(<NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresepuesto={setIsValidPresepuesto}


        />)}

       
        
    </header>
}

export default Header
