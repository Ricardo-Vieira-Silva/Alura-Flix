import React, { useState } from 'react';
import Cabecalho from '../componentes/Cabecalho';
import './NovoVideo.css';

function NovoVideo() {
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [url, setUrl] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = (e) => {
     e.preventDefault();
     console.log({ titulo, categoria, url, descricao });
    };

    const handleClear = () => {
        setTitulo('');
        setCategoria('');
        setUrl('');
        setDescricao('');
    };

    return (
        <>
         <Cabecalho />
         <div className='novo-video-container'>
            <h1>NOVO VÍDEO</h1>
            <h3> Complete o formulário para criar um novo card de vídeo.</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor='titulo'> Título: </label>
                <input 
                  type="text"
                  id="titulo"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  />
                 </div>
                <div>
                <label htmlFor='categoria'> Categoria: </label>
                <input 
                  type="text"
                  id="categoria"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                  /> 
                  </div> 
                  <div>
                <label htmlFor='url'> Link do Vídeo: </label>
                <input 
                  type="text"
                  id="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  /> 
                  </div> 

                  <div>
                <label htmlFor='descricao'> Descrição: </label>
                <textarea
                  id="descricao"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  ></textarea>
               </div> 
               <div className='buttons'>
                <button type='submit'> Gravar </button>
                <button type='button' onClick={handleClear}> Limpar </button>
               </div>

            </form>
         </div>
        </>
    );
}

export default NovoVideo;