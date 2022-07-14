import './App.css';
import Testimonio from './componentes/Testimonio';
// IMPORTACION NOMBRADA
//import {Testimonio} from './componentes/Testimonio';
function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre free CodeCamp:</h1>
        <Testimonio
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='Siempre me consto aprender JS
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, iusto aliquid quisquam eveniet doloremque, aspernatur reprehenderit vero vitae mollitia, illo laudantium? Ipsum repudiandae porro vel excepturi, laboriosam a neque quo.'
        />
        <Testimonio
          nombre='Sarah Chima'
          pais='Ningeria'
          imagen='sarah'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio='Siempre me consto aprender JS
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, iusto aliquid quisquam eveniet doloremque, aspernatur reprehenderit vero vitae mollitia, illo laudantium? Ipsum repudiandae porro vel excepturi, laboriosam a neque quo.'
        />
        <Testimonio
          nombre='Emma Bostain'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio='Siempre me consto aprender JS
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, iusto aliquid quisquam eveniet doloremque, aspernatur reprehenderit vero vitae mollitia, illo laudantium? Ipsum repudiandae porro vel excepturi, laboriosam a neque quo.'
        />
      </div>
    </div>
  );
}

export default App;
