import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Footer  from './components/common/Footer';
import Inicio from "./components/views/Inicio";
import Navegacion from "./components/common/Navegacion";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pedidos from './components/views/Pedidos';
import Registro from './components/views/Registro';
import Login from './components/views/Login';
import { useState } from 'react';
import RutasAdministrador from './components/routes/RutasAdministrador';
import RutasProtegidas from './components/routes/RutasProtegidas';
import Error404 from './components/views/error404';


function App() {

  const usuario = JSON.parse(sessionStorage.getItem('usuario')) || {}; 
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <BrowserRouter>
        <Navegacion usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Navegacion>
        
                <Routes>

            
            <Route exact path="/" element={<Inicio></Inicio>}></Route>
            <Route exact path="/administradorproductos/*" element={
              <RutasProtegidas>
                <RutasAdministrador></RutasAdministrador>
              </RutasProtegidas>}>  
            </Route>
            <Route exact path="/Registro" element={<Registro></Registro>}></Route> 
            <Route exact path="/pedidos" element={<Pedidos></Pedidos>}></Route>
            <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
            <Route path='*' element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
  )
}

export default App;
