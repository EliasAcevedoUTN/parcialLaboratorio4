import React, { Component } from "react";
import Row from "react-bootstrap/Row";

class Menu extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="barra">
          <div className="centrar">
            <p className="menu">Legajo: </p>
            <input id="legajo" type="number"></input>
            <p className="menu">Nombre: </p>
            <input id="nombre" type="text"></input>
            <a className="menu" href="#">
              MEJOR ALUMNO
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;
