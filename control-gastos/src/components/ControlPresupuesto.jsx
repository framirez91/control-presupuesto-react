import { useState ,useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'


const ControlPresupuesto = ({ 
gastos,
setGastos,
presupuesto,
setPresupuesto,
setIsValidPresepuesto,


}) => {
    const[disponible,setDisponible] = useState(0)
    const[gastado,setGastado] = useState(0)
    const[porcentaje,setPorcentaje] = useState(0)
    
    useEffect(() => {
        const totalGastado = gastos.reduce((total,gasto) => total + gasto.cantidad,0)
        
        const totalDisponible = presupuesto - totalGastado
        //Calculo el porcentaje

        const nuevoPorcentaje = (((presupuesto - totalDisponible ) / presupuesto) * 100).toFixed(2)

        setDisponible(totalDisponible)
        setGastado(totalGastado)
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje)
        },1500)


    }, [gastos])
    const handleResetApp = () => { 
        const resultado = confirm('¿Estas seguro de querer resetear la aplicación?')
        if(resultado){
            setGastos([])
            setPresupuesto(0)
            setIsValidPresepuesto(false)
            localStorage.removeItem('gastos')
            localStorage.removeItem('presupuesto')
        }else{
            return null

        }

    }


    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('es-CL', {
            style: 'currency',
            currency: 'CLP'
        })
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar
                styles={buildStyles({
                    pathColor: porcentaje > 100 ? 'red' : '#3b85f6',
                    textColor: porcentaje > 100 ? 'red' : '#3b85f6',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3a3a3a',
                    
                    
                 
                })}
                 value={porcentaje}
                    text={`${formatearCantidad(porcentaje)}% Gastado`}


                
                />


             
            </div>


            <div className='contenido-presupuesto'>
                <button 
                className='reset-app'
                type="button"
                onClick={handleResetApp}

                > resetear presupuesto</button>
                <p>
                    <span>Presupuesto </span> {formatearCantidad(presupuesto)}
                </p>
                <p className={`${disponible<0 ? 'negativo':'' }`}>
                    <span>Disponible </span> {formatearCantidad(disponible)}
                </p>
                <p>
                    <span>Gastado </span> {formatearCantidad(gastado)}
                </p>

            </div>

        </div>
    )
}

export default ControlPresupuesto
