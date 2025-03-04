import React, { Component } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

class EditarBote extends Component {
  path = null;
  url = [];
  boteId = null;
  nombre = React.createRef();
  modelo = React.createRef();
  capacidad = React.createRef();

  state = {
    botes: [],
    status: null,
  };

  componentDidMount() {
    this.path = window.location.pathname;
    console.log(this.path);
    this.url = this.path.split('/');
    console.log(this.url);
    this.boteId = this.url[2];
    console.log(this.boteId);
    this.getBote(this.boteId);
  }

  getBote = (id) => {
    axios
      .get('http://localhost:3000/api/botes/' + id)
      .then((res) => {
        this.setState({
          bote: res.data.bote,
        });
        console.log(res.data.bote);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  actualizarBote = (e) => {
    e.preventDefault();
    var bote = {
      name: this.nombre.current.value,
      model: this.modelo.current.value,
      capacity: this.capacidad.current.value,
    };

    axios
      .put('http://localhost:3000/api/modificar/' + this.boteId, bote)
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
      return <Navigate to="/Botes" />;
    }
    return (
      <React.Fragment>
        <div className="container">
          <h1>Editar Bote</h1>
          <form>
            <div class="mb-3">
              <label for="nombre" class="form-label">
                Nombre
              </label>
              <input type="text" class="form-control" id="nombre" />
            </div>
            <div class="mb-3">
              <label for="modelo" class="form-label">
                Modelo
              </label>
              <input type="text" class="form-control" id="modelo" />
            </div>
            <div class="mb-3">
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

export default EditarBote;
