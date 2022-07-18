import React from 'react';
import '../hojas-de-estilos/BotonClear.css';

const BotonClear = (props) => (
<div className='BotonClear'>
    {props.children}
</div>
);
export default BotonClear;