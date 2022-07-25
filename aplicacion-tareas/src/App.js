import './App.css';
import logofree from './imagenes/freecodecamp-logo.png';
import ListaDeTareas from './componente/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>

      <div className='freecodecamp-logo-contenedor'>
        <img
          src={logofree}
          className='freecodecamp-logo'
          alt='logo-frecodecamp'
        />
      </div>

      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
