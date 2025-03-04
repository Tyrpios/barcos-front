import React, { Component } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

class AgregarUsuario extends Component {
  name = React.createRef();
  apellido = React.createRef();
  correo = React.createRef();
  password = React.createRef();

  state = {
    usuario: {},
    state: null,
  };

  changeState = () => {
    this.setState({
      name: this.nombre.current.value,
      surname: this.apellido.current.value,
      email: this.correo.current.value,
      password: this.pass.current.value,
    });

    console.log(this.state);
  };

  guardarUsuario = (e) => {
    e.preventDefault();
    console.log(this.nombre.current.value);
    console.log(this.apellido.current.value);
    console.log(this.correo.current.value);
    console.log(this.pass.current.value);
    this.changeState();
    console.log('Prueba');
    console.log(this.state.usuario);
    var usuario = {
      name: this.nombre.current.value,
      surname: this.apellido.current.value,
      email: this.correo.current.value,
      password: this.password.current.value,
    };
    console.log('Prueba2');
    console.log(usuario);
    axios
      .post('http://localhost:3000/api/guardarUsuario', usuario)
      .then((res) => {
        this.setState({
          status: 'success',
          usuario: res.data,
        });
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
          <h1>Agregar Usuario</h1>
          <form>
            <div class="mb-3">
              <label for="nombre" class="form-label">
                Nombre
              </label>
              <input type="text" class="form-control" id="nombre" />
            </div>
            <div class="mb-3">
              <label for="apellido" class="form-label">
                Apellido
              </label>
              <input type="text" class="form-control" id="apellido" />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">
                Correo
              </label>
              <input type="email" class="form-control" id="email" />
            </div>
            <div class="mb-3">
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

export default AgregarUsuario;
