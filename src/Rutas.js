import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AgregarUsuario from './componentes/AgregarUsuario';
import Usuarios from './componentes/Usuarios';
import Menu from './componentes/Menu';
import EditarUsuario from './componentes/EditarUsuario';
import Botes from './componentes/Botes';
import AgregarBote from './componentes/AgregarBote';
import EditarBote from './componentes/EditarBote';

class Rutas extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<div>HOME</div>} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/agregarUsuario" element={<AgregarUsuario />} />
          <Route path="/editarUsuario/:id" element={<EditarUsuario />} />
          <Route path="/botes" element={<Botes />} />
          <Route path="/agregarbote" element={<AgregarBote />} />
          <Route path="/editarBote/:id" element={<EditarBote />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Rutas;
