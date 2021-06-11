import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Menu from "./Menu";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

class DetalleAlumno extends Component {
  constructor() {
    super();
    this.state = {
      alumnos: [],
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this.getAlumnos();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getAlumnos() {
    fetch("http://179.43.113.170:8082/test/td/alumnos.json")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ alumnos: responseJson });
        // console.log(responseJson);
      });
  }

  render() {
    const legajoAlumno = this.props.match.params.legajo;
    let alumnoEncontrado = "";
    for (let buscar of this.state.alumnos) {
      if (buscar.legajo == legajoAlumno) {
        alumnoEncontrado = buscar;
      }
      console.log(alumnoEncontrado.alumno);
    }
    console.log(alumnoEncontrado.notas);

    //no me deja iterar las notas asi que no pude llenar el campo de notas ni del promedio

    // const notasAlumno = '';
    // for (let nota of alumnoEncontrado.notas){
    //     notasAlumno+=`<li>${nota}</li><br>`;
    // }

    // let sumatoria = 0;
    // for (let nota of alumnoEncontrado.notas) {
    //   sumatoria += nota;
    // }
    // let promedio = sumatoria / alumnoEncontrado.notas.length;

    return (
      <React.Fragment>
        <Menu></Menu>
        <div className="contenedor">
          <Row>
            <div>
              <img src={alumnoEncontrado.foto} />
              <p className="nombre">{alumnoEncontrado.alumno}</p>
            </div>
          </Row>
          <Row>
            <table className="tablaDatos">
              <tr>
                <td>
                  <p className="datos">Legajo: </p>
                </td>
                <td>{alumnoEncontrado.legajo}</td>
              </tr>
              <tr>
                <td>
                  <p className="datos">Carrera:</p>
                </td>
                <td>{alumnoEncontrado.carrera}</td>
              </tr>
              <tr>
                <td>Esta Activo</td>
                <td>
                  <div>
                    {alumnoEncontrado.estaActivo ? <p>Si</p> : <p>No</p>}
                  </div>
                </td>
              </tr>
              <tr>
                <td>Fecha de nacimiento</td>
                <td>{alumnoEncontrado.fechaNacimiento}</td>
              </tr>
              <tr>
                <td>Notas</td>
                <td>
                  {/* <div>{notasAlumno}</div> */}
                </td>
              </tr>
              <tr>
                <td>Promedio</td>
                {/* <td>{promedio}</td> */}
              </tr>
            </table>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default DetalleAlumno;
