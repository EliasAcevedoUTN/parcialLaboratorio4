import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Menu from "./Menu";
import Alumnos from "./Alumnos";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
class grillaAlumnos extends Component {
  
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
    .then((response)=>response.json())
    .then((responseJson)=>{
      this.setState({alumnos: responseJson});
      console.log(responseJson);
    });
  }

  render() {
      let alumnos = this.state.alumnos.map(alumno =>{
        let sumatoria = 0;  
        for (let nota of alumno.notas){
            sumatoria += nota;
          }
          let promedio = sumatoria/alumno.notas.length;
          return (
              <Alumnos alumno={alumno.alumno} legajo={alumno.legajo} promedio={promedio} fechaNacimiento={alumno.fechaNacimiento}></Alumnos>
          )
      })
    return (
      <React.Fragment>
        <Menu></Menu>
        <Container fluid>
          <Row className="justify-content-md-center">
            <table>
                <tr>
                  <th>Alumno</th>
                  <th>Legajo</th>
                  <th>Fecha de nacimiento</th>
                  <th>Promedio de notas</th>
                  <th></th>
                </tr>
              {alumnos}
            </table>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default grillaAlumnos;
