import { Routes, Route } from "react-router-dom";
import AdministradorProductos from "../views/Administrador/AdministradorProductos";
import AdministradorUsuarios from "../views/Administrador/AdministradorUsuarios";
import AdministradorPedidos from "../views/Administrador/AdministradorPedidos";
import CrearProducto from "../views/Producto/CrearProducto";
import EditarProducto from "../views/Producto/EditarProducto";
import EditarUsuario from "../views/Administrador/EditarUsuario";
import Error404 from "../views/error404"
import Inicio from "../views/Inicio";


const RutasAdministrador = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<AdministradorProductos></AdministradorProductos>}
        ></Route>
        <Route
          exact
          path="/usuarios"
          element={<AdministradorUsuarios></AdministradorUsuarios>}
        ></Route>
        <Route
          exact
          path="/usuarios/editarusuario/:id"
          element={<EditarUsuario></EditarUsuario>}
        ></Route>
        <Route
          exact
          path="/pedidos"
          element={<AdministradorPedidos></AdministradorPedidos>}
        ></Route>
        <Route
          exact
          path="/crearproducto"
          element={<CrearProducto></CrearProducto>}
        ></Route>
        <Route
          exact
          path="/editarproducto/:id"
          element={<EditarProducto></EditarProducto>}
        ></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
    </>
  );
};

export default RutasAdministrador;
