import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/common/Footer";
import Inicio from "./components/views/Inicio";
import Navegacion from "./components/common/Navegacion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pedidos from "./components/views/Pedidos";
import AdministradorProductos from "./components/views/Administrador/AdministradorProductos";

function App() {
  return (
    <BrowserRouter>
      <Navegacion></Navegacion>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/pedidos" element={<Pedidos></Pedidos>}></Route>
        <Route
          path="/administrador/*"
          element={<AdministradorProductos></AdministradorProductos>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
