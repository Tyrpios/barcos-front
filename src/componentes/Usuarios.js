import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

class Usuarios extends Component {
  state = {
    usuarios: [],
  };

  componentDidMount() {
    this.getUsuarios();
  }

  getUsuarios = () => {
    axios
      .get('http://localhost:3000/api/usuarios')
      .then((res) => {
        console.log('Usuarios');
        console.log(res.data.doc);
        this.setState({
          usuarios: res.data.doc,
        });
        console.log(this.state.usuarios);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  borrarUsuario = (id) => {
    axios
      .delete('http://localhost:3000/api/eliminar/' + id)
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
      'Usuario Eliminado',
      'El usuario ha sido eliminado exitosamente',
      'success'
    );
  };

  render() {
    return (
      <React.Fragment>
        <h1>Usuarios</h1>
        <Link to="/agregarUsuario" className="btn btn-success">
          Agregar Usuario
        </Link>
        <table className="table mt-5 table-primary table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
              <th>Contraseña</th>
            </tr>
          </thead>
          <tbody>
            {this.state.usuarios.map((usuario) => {
              return (
                <React.Fragment>
                  <tr>
                    <td>{usuario._id}</td>
                    <td>{usuario.name}</td>
                    <td>{usuario.surname}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.password}</td>
                    <td>
                      <Link
                        to={'/editarUsuario/' + usuario._id}
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

export default Usuarios;
