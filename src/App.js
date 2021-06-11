import './App.css';
import {Switch, Route} from 'react-router-dom';
import grillaAlumnos from './componentes/grillaAlumnos';
import DetalleAlumno from './componentes/DetalleAlumno';
function App() {
  return (
    <Switch>
      <Route exact path="/grilla-alumnos" component ={grillaAlumnos} ></Route>
      <Route exact path="/detalle-alumno/:legajo" component={DetalleAlumno}></Route>
    </Switch>
  );
}

export default App;
