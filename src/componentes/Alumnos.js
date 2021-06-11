import React, { Component } from "react";
import Table from "react-bootstrap/Table";
class Alumnos extends Component {
  render() {
    return (
      <React.Fragment>
        <tr>
          <td>{this.props.alumno}</td>
          <td>{this.props.legajo}</td>
          <td>{this.props.fechaNacimiento}</td>
          <td>{this.props.promedio}</td>
          <td>
            <a href={`detalle-alumno/${this.props.legajo}`}>VER DETALLE</a>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Alumnos;
