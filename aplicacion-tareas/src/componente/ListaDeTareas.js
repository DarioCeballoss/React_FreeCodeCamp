import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario'
import Tarea from  './Tarea'
import '../estilos/ListaDeTareas.css'

function ListaDeTareas(){
    const [tareas, setTareas] = useState ([]);
    return(
<>
        <TareaFormulario />
        <div className='tarea-lista-contenedor'>
            {
                tareas.map((tarea) => 
                <Tarea texto = {tarea.texto}/>
                )
            }
            
        </div>
    
</>
    );
}

export default ListaDeTareas;