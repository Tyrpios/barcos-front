import React, { Component } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

class EditarUsuario extends Component {
  path = null;
  url = [];
  usuarioId = null;
  nombre = React.createRef();
  apellido = React.createRef();
  correo = React.createRef();
  pass = React.createRef();

  state = {
    usuario: [],
    status: null,
  };

  componentDidMount() {
    this.path = window.location.pathname;
    console.log(this.path);
    this.url = this.path.split('/');
    console.log(this.url);
    this.usuarioId = this.url[2];
    console.log(this.usuarioId);
    this.getUsuario(this.usuarioId);
  }

  getUsuario = (id) => {
    axios
      .get('http://localhost:3000/api/usuarios/' + id)
      .then((res) => {
        this.setState({
          usuario: res.data.usuario,
        });
        console.log(res.data.usuario);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  actualizarUsuario = (e) => {
    e.preventDefault();
    var usuario = {
      nombre: this.nombre.current.value,
      surname: this.apellido.current.value,
      email: this.correo.current.value,
      pass: this.correo.current.value,
    };

    axios
      .put('http://localhost:3000/api/actualizar/' + this.usuarioId, usuario)
      .then((res) => {
        this.setState({
          status: 'success',
        });
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    if (this.state.status === 'success') {
      return <Navigate to="/usuarios" />;
    }
    return (
      <React.Fragment>
        <div className="container">
          <h1>Editar Usuario</h1>
          <form>
            <div className="mb-3">
              <label for="nombre" class="form-label">
                Nombre
              </label>
              <input type="text" class="form-control" id="nombre" />
            </div>
            <div className="mb-3">
              <label for="apellido" class="form-label">
                Apellido
              </label>
              <input type="text" class="form-control" id="apellido" />
            </div>
            <div className="mb-3">
              <label for="email" class="form-label">
                Correo
              </label>
              <input type="email" class="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label for="pass" class="form-label">
                Contraseña
              </label>
              <input type="password" class="form-control" id="pass" />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default EditarUsuario;
