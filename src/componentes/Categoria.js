import React from 'react';

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
