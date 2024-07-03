import React from 'react';
import { useNavigate } from 'react-router-dom';
import videoServicos from '../servicos/videoServicos';

function VideoCard({ video }) {
    const navigate = useNavigate();

    const handleDelete = async () => {
        await videoServicos.deleteVideo(video.id);
        // Você pode querer atualizar a lista de vídeos após a exclusão.
    };

    return (
        <div className="video-card">
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <button onClick={() => navigate(`/editar/${video.id}`)}>Editar</button>
            <button onClick={handleDelete}>Deletar</button>
        </div>
    );
}

export default VideoCard;