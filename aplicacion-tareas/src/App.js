import './App.css';
import Tarea from './componente/Tarea';
import logofree from './imagenes/freecodecamp-logo.png';

function App() {
  return (
    <div className='aplicacion-tareas'>

      <div className='freecodecamp-logo-contenedor'>
        <img
          src={logofree}
          className='freecodecamp-logo'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <Tarea texto='Aprender react' />
      </div>
    </div>
  );
}

export default App;
