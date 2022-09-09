import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Index from './pages/Index';
import "./css/index.css";
import "./css/candidato.css";
import Candidato from './pages/Candidato/Index';
import Empresa from './pages/Empresa';
import InformacaoVaga from './pages/InformacaoVaga';
import Sitemap from './pages/Sitemap';
import InscricaoVaga from './pages/InscricaoVaga';
import Vaga from './pages/Vaga';


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/candidato' element={<Candidato/>}/> 
        <Route path='/empresa' element={<Empresa/>}/> 
        <Route path='/informacaovaga' element={<InformacaoVaga/>}/> 
        <Route path='/sitemap' element={<Sitemap/>}/>
        <Route path='/inscricaovaga' element={<InscricaoVaga/>}/>
        <Route path='/vaga' element={<Vaga/>}/>

      </Routes>

      <Footer/>
    
    </BrowserRouter>
  );
}


