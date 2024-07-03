import React, { useState } from "react";
import Cabecalho from "../componentes/cabecalho";
import Footer from "../componentes/Footer";
import { createVideo } from "../servicos/videoServicos";
import { await } from "react-router-dom";

function NovoVideoPage() {
    const [formData, setFormData] = useState({});
    
    const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createVideo(formData);
        //lógica para criar novo vídeo
        // Atualizar a página ou redirecionar
    };
    
    return (
        <div>
            <Cabecalho />
       <div>
        <h2>Novo Vídeo</h2>
        <div>
        {/*Renderização dos componetes e formul+ário */}
        </div>
        <form onSubmit={handleSubmit}>
            {/* Campos do formulário */}
            <button type="submit">Salvar</button>
        </form>
      </div>
      <Footer />
      </div>
     
    );
}

export default NovoVideoPage;