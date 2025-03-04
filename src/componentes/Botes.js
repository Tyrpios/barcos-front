import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

class Botes extends Component {
  state = {
    botes: [],
  };

  componentDidMount() {
    this.getBotes();
  }

  getBotes = () => {
    axios
      .get('http://localhost:3000/api/botes')
      .then((res) => {
        console.log('Botes');
        console.log(res.data.doc);
        this.setState({
          botes: res.data.doc,
        });
        console.log(this.state.botes);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  borrarBotes = (id) => {
    axios
      .delete('http://localhost:3000/api/borrar' + id)
      .then((res) => {
        this.setState({
          status: 'deleted',
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    window.location.reload(true);
    swal(
      'Bote Eliminado',
      'El usuario ha sido eliminado exitosamente',
      'success'
    );
  };

  render() {
    return (
      <React.Fragment>
        <h1>Botes</h1>
        <Link to="/AgregarBote" className="btn btn-success">
          Agregar Botes
        </Link>
        <table className="table mt-5 table-primary table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Modelo</th>
              <th>Capacidad</th>
            </tr>
          </thead>
          <tbody>
            {this.state.botes.map((bote) => {
              return (
                <React.Fragment>
                  <tr>
                    <td>{bote._id}</td>
                    <td>{bote.name}</td>
                    <td>{bote.model}</td>
                    <td>{bote.capacity}</td>
                    <td>
                      <Link
                        to={'/editarbote/' + bote._id}
                        className="btn btn-success"
                      >
                        Editar
                      </Link>

                      <button className="btn btn-danger ms-3">Eliminar</button>
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Botes;
