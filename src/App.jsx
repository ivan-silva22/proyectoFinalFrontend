import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Footer } from './components/common/Footer'
// import EditarProducto from './components/views/Producto/EditarProducto';
// import Pedidos from './components/views/Pedidos';
// import AdministradorPedidios from './components/views/Administrador/AdministradorPedidos';
// import AdministradorUsuarios from './components/views/Administrador/AdministradorUsuarios';
import AdministradorProductos from './components/views/Administrador/AdministradorProductos';
// import CrearProducto from './components/views/Producto/CrearProducto';

function App() {
  

  return (
    <>
      <AdministradorProductos></AdministradorProductos>
      {/* <AdministradorUsuarios></AdministradorUsuarios> */}
      {/* <AdministradorPedidios></AdministradorPedidios> */}
      {/* <Pedidos></Pedidos> */}
      {/* <CrearProducto></CrearProducto> */}
      {/* <EditarProducto></EditarProducto> */}
    </>
  )
}

export default App
