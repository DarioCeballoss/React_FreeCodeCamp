import React from "react";

function Testimonio(){
  return (
    <div>
      <div className='contenedor-Testimonio'>
      <img
        className='imagen-testimonio'
        src={require('../imagenes/testimonio-emma.png')}
        alt='Foto de Emma' />
      </div>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>Emma Bostain en Suecia</p>
        <p className='cargo-testimonio'>Ingeniera de Software en Spotify</p>
        <p className='texto-testimonio'>"Siempre me consto aprender JS"</p>
      </div>
    </div>
  );

}

export default Testimonio;