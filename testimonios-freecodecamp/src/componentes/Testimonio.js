import React from "react";
import '../hojas-de-estilos/Testimonios.css';

//EXPORTACION NOMBRADA - ventaja puede ser mas de uno
// export function Testimonio() { 

function Testimonio(props) { // EXPORTACION POR DEFECTO
  return (
    <div className='contenedor-testimonio'>

      <img
        className='imagen-testimonio'
        src={require('../imagenes/testimonio-emma.png')}
        alt='Foto de Emma' />

      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );

}

export default Testimonio; // EXPORTACION POR DEFECTO