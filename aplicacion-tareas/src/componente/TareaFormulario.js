import React from 'react';
import '../estilos/TareaFormulario.css'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function TareaFormulario(props) {

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value); //toma el valor de lo que se escribe MANEJA EL CAMBIO
    }

    const manejarEnvio = e => {
        e.preventDefault(); // Para que no se actualice cuando se envia el formulario

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);
    }

    return (
        <form
            className='tarea-formulario'
            onSubmit={manejarEnvio} >

            <input
                className='tarea-input'
                type='text'
                placeholder='Escribe una tarea'
                name='texto'
                onChange={manejarCambio}
            />
            <button className='tarea-boton'>
                Agregar tarea
            </button>
        </form>
    );

}

export default TareaFormulario;