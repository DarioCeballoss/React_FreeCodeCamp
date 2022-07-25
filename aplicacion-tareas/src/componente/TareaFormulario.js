import React from 'react';
import '../estilos/TareaFormulario.css'
import { useState } from 'react';

function TareaFormulario(props) {

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        console.log("Eslkfslakjslkjaskldj");
    }

    const manejarEnvio = e => {
        const tareaNueva = {
            id: '561582',
            texto: "hola"
        }
    }

    return (
        <form>
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