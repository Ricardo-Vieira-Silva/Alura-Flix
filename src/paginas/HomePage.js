import React, { useEffect, useState } from 'react';
import videoServicos from '../servicos/videoServicos';
import Cabecalho from "../componentes/Cabecalho";
import Banner from "../componentes/Banner";
import Footer from "../componentes/Footer";
import Categoria from '../componentes/Categoria';

function HomePage() {
    const [videos, setVideos] = useState([]);
    const [categorias, setCategorias] = useState({
        frontend: [],
        backend: [],
        inovacao: [],
        gestao: [],
        mobile: [],
    });

    useEffect(() => {
        async function fetchData() {
            const response = await videoServicos();
            console.log('Videos:', response); 
            setVideos(response);

            const categoriasAtualizadas = {
                frontend: response.filter(video => video.categoria === 'Frontend'),
                backend: response.filter(video => video.categoria === 'Backend'),
                inovacao: response.filter(video => video.categoria === 'Inovação'),
                gestao: response.filter(video => video.categoria === 'Gestão'),
                mobile: response.filter(video => video.categoria === 'Mobile'),
            };

            setCategorias(categoriasAtualizadas);
        }
        fetchData();
    }, []);

    return (
        <div className='homepage'>
            <Cabecalho />
            <Banner />
            <div className='categorias'>
                <Categoria titulo="Frontend" videos={categorias.frontend} />
                <Categoria titulo="Backend" videos={categorias.backend} />
                <Categoria titulo="Inovação" videos={categorias.inovacao} />
                <Categoria titulo="Gestão" videos={categorias.gestao} />
                <Categoria titulo="Mobile" videos={categorias.mobile} />
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;
