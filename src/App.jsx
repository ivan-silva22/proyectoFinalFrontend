import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Footer  from './components/common/Footer';
import Inicio from "./components/views/Inicio";
import Navegacion from "./components/common/Navegacion";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pedidos from './components/views/Pedidos';
import AdministradorUsuarios from './components/views/Administrador/AdministradorUsuarios';
import AdministradorProductos from './components/views/Administrador/AdministradorProductos';
import AdministradorPedidos from './components/views/Administrador/AdministradorPedidos';
import Registro from './components/views/Registro';

function App() {
  return (
    <BrowserRouter>
        <Navegacion></Navegacion>
        
                <Routes>

            <Route exact path="/pedidos" element={<Pedidos></Pedidos>}></Route>
            <Route exact path="/" element={<Inicio></Inicio>}></Route>
            <Route exact path="/administradorproductos" element={<AdministradorProductos></AdministradorProductos>}></Route>
            <Route exact path="/administradorusuarios" element={<AdministradorUsuarios></AdministradorUsuarios>}></Route>
            <Route exact path="/Administradorpedidos" element={<AdministradorPedidos></AdministradorPedidos>}></Route>
            <Route exact path="/Registro" element={<Registro></Registro>}></Route> 
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
  )
}

export default App;
