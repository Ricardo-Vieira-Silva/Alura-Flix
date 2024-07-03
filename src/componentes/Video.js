import React from "react";
import { Link } from 'react-router-dom';
import './Video.css';

function Video ({ video, onDelete}) {
    return (
        <div className="video-card">
            <iframe
            title={video.title}
            width="560"
            height="315"
            src={video.url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypter-media; gyroscope; picture-in-picture"
            allowFullScreen>
       </iframe>
       <h3>{video.titulo}</h3>
       <p>{video.descricao}</p>
       <div className="video-actions">
        <Link to={`/editar-video/${video.id}`} className="button edit-button">
         <i className="fa fa-edit"></i> Editar
        </Link> 
        <button onClick={() => onDelete(video.id)} className="button delete-button">
         <i className="fa fa-trash"></i> Deletar  
        </button>
      </div>
    </div>
    );
}

export default Video;