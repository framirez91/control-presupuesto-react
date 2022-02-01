import React from 'react';

const Mensaje = ({children, tipo}) => {
  return (
  <div className={`alerta ${tipo}`}>{children}</div>
  )
  //children es el texto que se va a mostrar, mezclamos clase fija con clase dinamica
};

export default Mensaje;
