import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import './estilos-css/Boton.css';
import Contador from './componentes/Contador';

function App() {
//funcion
const manejarClic = () => {
  console.log("Clic");
}
//funcion ES6
const reiniciarClic = () => {
  console.log("reiniciar");
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
        <Contador  numClics='5' />
        <Boton texto= 'Clic' esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton texto= 'Reinicar' esBotonDeClic={false} manejarClic={reiniciarClic}/>
      </div>
    </div>
  );
}

export default App;
