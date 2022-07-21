import React from 'react';
import '../estilos/TareaFormulario.css'

function TareaFormulario(props) {
    return (
        <form>
            <input
                className='tarea-input'
                type='text'
                placeholder='Escribe una tarea'
                name='texto'
            />
            <button className='tarea-boton'>
                Agregar tarea
            </button>
        </form>
    );

}

export default TareaFormulario;