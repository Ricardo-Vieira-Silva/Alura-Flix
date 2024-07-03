import React, { useEffect, useState } from "react";
import { useParams, useNavigate }  from "react-router-dom";
import videoServicos from '../servicos/videoServicos'
import './NovoVideo.css';

function EditarVideo() {
    const { id } = useParams();
    const history = useNavigate();
    const [video, setVideo] = useState({ titulo:'', categoria: '', url: '', descricao: ''});

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const response = await videoServicos.getVideo(id);
                setVideo(response.data);
            } catch (error) {
                console.error('Erro ao buscar vídeo: ', error);
              }
            };
            fetchVideo();
        }, [id]);

        const handleChange = (e) => {
         const { name, value } = e.target;
         setVideo({ ...video, [name]: value });
       };

       const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            await videoServicos.updateVideo(id, video);
            history.push('/');
         } catch (error) {
            console.error('Erro ao atualizar vídeo: ', error);
         }
       };

       return (
        <div className="novo-video">
         <h1>Editar Vídeo</h1>
         <form onSubmit={handleSubmit}>
            <label>Título</label>
            <input type="text" name="titulo" value={video.titulo} onChange={handleChange} required />
   
            <label>Categoria</label>
            <input type="text" name="categoria" value={video.categoria} onChange={handleChange} required />
   
            <label>URL</label>
            <input type="text" name="url" value={video.url} onChange={handleChange} required />
   
            <label>Descrição</label>
            <textarea type="descricao" value={video.descricao} onChange={handleChange} required > </textarea>

            <button type="submit" className="button save-button">Salvar</button>
            <button type="button" className="button clear-button" onClick={() => setVideo({ titulo: '', categoria: '', url: '', descricao: '' })}>Limpar</button>
         </form>
        </div>
       );
    }

 export default EditarVideo;