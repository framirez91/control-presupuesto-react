import React from 'react'
import Gasto from './Gasto'
export const ListadoGastos = ({
    gastos,
    setGastoEditar,
    eliminarGasto,
    gastosFiltrados,
    filtro
}) => {
    return (

        <div className='listado-gastos contenedor'>
            

            {filtro ? (
                <>
                <h2>{gastosFiltrados.length ? 'Gastos' : 'No Hay Gastos En Esta Categoria'}</h2>
               { gastosFiltrados.map(gasto => (
                    <Gasto
                        key={gasto.id}
                        gasto={gasto}
                        setGastoEditar={setGastoEditar}
                        eliminarGasto={eliminarGasto}
                    />

                ))
                }
                </>
            ) : (
                <>
                <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos'}</h2>
                {gastos.map(gasto => (
                    <Gasto
                        key={gasto.id}
                        gasto={gasto}
                        setGastoEditar={setGastoEditar}
                        eliminarGasto={eliminarGasto}

                    />
                ))}
                </>

             )
            }









        </div>
    )
}

export default ListadoGastos
