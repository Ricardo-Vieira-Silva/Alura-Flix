import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import { updateVideo } from '../servicos/videoServicos';

function Modal ({ video, onClose, onSave }) {
    const [formData, setFormData] = React.useState(video);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateVideo(formData);
        onSave(formData);
    };

    return (
        <div className='modal'>
        <button onClick={onClose}>Fechar</button>
        <h2>Editar Card</h2>
        <Form onSubmit={handleSubmit}>
           {/*Campos do formularios */ }
        </Form>
        <div>
            {/* Renderização do modal e formulário */}
        </div>
        </div>
    );
}

export default Modal;

