import React from 'react'


      
const ControlPresupuesto = ({presupuesto}) => {

  const formatearCantidad = (cantidad) =>{
     return cantidad.toLocaleString('EUR', {
        style: 'currency',
        currency: 'EUR'
      })
  }
  return (
    <div className='contenedor.presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>Grafica</p>
        </div>
        <div className='contenido-presupuesto'>
                <p>
                    <span>Presupues:</span> {formatearCantidad(presupuesto)}
                </p>
                <p>
                    <span>Disponible:</span> {formatearCantidad(presupuesto)}
                </p>
                <p>
                    <span>Gastado:</span> {formatearCantidad(presupuesto)}
                </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto