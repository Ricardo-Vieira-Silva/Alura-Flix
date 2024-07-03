import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './paginas/HomePage';
import NovoVideo from "./paginas/NovoVideo";
import EditarVideo from './paginas/EditarVideo';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/novo-video" element={<NovoVideo />} />
      <Route path="/editar-video/:id" Component={EditarVideo} />
      </Routes>
    </Router>
  );
}

export default App;
