import React, { Component } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

class AgregarBote extends Component {
  nombre = React.createRef();
  modelo = React.createRef();
  capacidad = React.createRef();

  state = {
    botes: {},
    state: null,
  };

  changeState = () => {
    this.setState({
      name: this.nombre.current.value,
      model: this.modelo.current.value,
      capacity: this.capacidad.current.value,
    });

    console.log(this.state);
  };

  guardarBote = (e) => {
    e.preventDefault();
    console.log(this.nombre.current.value);
    console.log(this.modelo.current.value);
    console.log(this.capacidad.current.value);
    this.changeState();
    console.log('Prueba');
    console.log(this.state.botes);
    var botes = {
      name: this.nombre.current.value,
      model: this.modelo.current.value,
      capcity: this.capacidad.current.value,
    };
    console.log('Prueba2');
    console.log(botes);
    axios
      .post('http://localhost:3000/api/agregar', botes)
      .then((res) => {
        this.setState({
          status: 'success',
          botes: res.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    if (this.state.status === 'success') {
      return <Navigate to="/Botes" />;
    }
    return (
      <React.Fragment>
        <div className="container">
          <h1>Agregar Bote</h1>
          <form>
            <div className="mb-3">
              <label for="nombre" class="form-label">
                Nombre
              </label>
              <input type="text" class="form-control" id="nombre" />
            </div>
            <div className="mb-3">
              <label for="modelo" class="form-label">
                Modelo
              </label>
              <input type="text" class="form-control" id="modelo" />
            </div>
            <div className="mb-3">
              <label for="capacidad" class="form-label">
                Capacidad
              </label>
              <input type="capacidad" class="form-control" id="capacidad" />
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

export default AgregarBote;
