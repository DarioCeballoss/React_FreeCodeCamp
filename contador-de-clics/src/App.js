import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react'; //hook

function App() {
const [numClics, setNumClics] = useState(0); // ojo

//funcion flecha
const manejarClic = () => {
  setNumClics(numClics+1);
}
//funcion flecha ES6
const reiniciarClic = () => {
setNumClics(0);
}


  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-proncipal'>
        <Contador  numClics={numClics} />
        <Boton texto= 'Clic' esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton texto= 'Reinicar' esBotonDeClic={false} manejarClic={reiniciarClic}/>
      </div>
    </div>
  );
}

export default App;
