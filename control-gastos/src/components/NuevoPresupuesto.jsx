import {useState} from 'react'
import Mensaje from './Mensaje'
const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresepuesto}) => {
    const [mensaje,setMensaje] = useState('')


    const handlePresupuesto = (e) => {
        e.preventDefault()

        if(!presupuesto || presupuesto < 0 ) {
            setMensaje('No es un presupuesto valido')
            return// no se ejecuta el resto de la funcion 
        } 
        setMensaje('')// en caso de que se cumpla la condicion, se limpia el mensaje
        
        setIsValidPresepuesto(true)// se cambia el estado de la variable isValidPresupuesto
        



    

    }
    
    return <div className='contenedor-presupuesto contenedor sombra'>
        <form
        onSubmit={handlePresupuesto} 
        className='formulario'>
            <div className='campo'>
                <label className='campo'>Definir Presupuesto</label>
                <input className='nuevo-presupuesto'
                type="number"
                placeholder='Añade tu Presupuesto' 
                value={presupuesto}                
                onChange={e => setPresupuesto(Number(e.target.value))}
                />
            </div>
            <input type="submit" value="añadir " />

            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            {/* si mensaje es true, entonces muestra el mensaje de error */}

        </form>
    </div>
}

export default NuevoPresupuesto
