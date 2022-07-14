import React from "react";
import '../hojas-de-estilos/Testimonios.css';

//EXPORTACION NOMBRADA - ventaja puede ser mas de uno
// export function Testimonio() { 

function Testimonio() { // EXPORTACION POR DEFECTO
  return (
    <div className='contenedor-testimonio'>

      <img
        className='imagen-testimonio'
        src={require('../imagenes/testimonio-emma.png')}
        alt='Foto de Emma' />

      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>Emma Bostain en Suecia</p>
        <p className='cargo-testimonio'>Ingeniera de Software en Spotify</p>
        <p className='texto-testimonio'>"Siempre me consto aprender JS"
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, iusto aliquid quisquam eveniet doloremque, aspernatur reprehenderit vero vitae mollitia, illo laudantium? Ipsum repudiandae porro vel excepturi, laboriosam a neque quo.</p>
      </div>
    </div>
  );

}

export default Testimonio; // EXPORTACION POR DEFECTO