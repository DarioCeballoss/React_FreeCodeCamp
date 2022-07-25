import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario'
import Tarea from './Tarea'
import '../estilos/ListaDeTareas.css'

function ListaDeTareas() {
    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        console.log("Tarea agregada");
        console.log(tarea);
    }

    return (
        <>
            <TareaFormulario />
            <div className='tarea-lista-contenedor'>
                {
                    tareas.map((tarea) =>
                        <Tarea
                            texto={tarea.texto}
                            completada={tarea.completada}
                        />

                    )
                }

            </div>

        </>
    );
}

export default ListaDeTareas;