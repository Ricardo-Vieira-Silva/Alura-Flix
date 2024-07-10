import React from 'react';
import del from '../assets/delete.png';
import edit from '../assets/editar.png';
import '../componentes/Categoria.css';
function Categoria({ titulo, videos = [] }) {
    return (
        <div className="categoria">
            <h2>{titulo}</h2>
            <div className="videos">
                {videos.length > 0 ? (
                    videos.map((video) => (
                        <div key={video.id} className="video-card">
                            <h3>{video.titulo}</h3>
                            <iframe 
                                width="560" 
                                height="315" 
                                src={video.url} 
                                title={video.titulo} 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                            <div className="video-actions">
                                <img 
                                    width="8"
                                    height="18"
                                    src={edit} 
                                    alt="Editar" 
                                    className="icon" 
                                    onClick={() => alert(`Editar vídeo ${video.id}`)} 
                                />
                                <img 
                                    width="8"
                                    height="18"
                                    src={del}
                                    alt="Deletar" 
                                    className="icon" 
                                    onClick={() => alert(`Deletar vídeo ${video.id}`)} 
                                />
                            </div>
                         </div>
                    ))
                ) : (
                    <p>Não há vídeos nesta categoria.</p>
                )}
            </div>
        </div>
    );
}

export default Categoria;
