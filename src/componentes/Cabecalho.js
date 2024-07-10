import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/LogoMain.png';


function Cabecalho() {
    return (
        <header >
            <div>
                <img src={logo} alt="Logo alura flix" className='cabecalho-logo' ></img>
            </div>
            <nav className='cabecalho-nav'>
               <ul>
                 <Link to="/">Início</Link>   
                 <Link to="/novo-video">Novo Vídeo</Link>
               </ul>
             </nav> 
            
        </header>
    )
}

export default Cabecalho;