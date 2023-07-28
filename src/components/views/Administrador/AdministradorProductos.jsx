import { Table, Container, Row, Col } from "react-bootstrap";
import ItemProducto from "../Producto/ItemProducto";
import { useEffect, useState } from "react";
import { consultarListaProductos } from "../../helpers/queries";
import { Link } from "react-router-dom";

 

const AdministradorProductos = () => {
  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() =>{
    consultarListaProductos().then((respuesta) =>{
      setListaProductos(respuesta)
    })
  }, [])
  return (
    <Container>
      <Row>
        <Col md={2} className="mt-5 py-4">
          <h4>Opciones</h4>
          <div className="d-flex flex-column ">
            <Link className="btn btn-primary" to='/administradorproductos'>Productos</Link>
            <Link className="btn btn-primary my-2" to='/administradorusuarios'>
              Usuarios
            </Link>
            <Link className="btn btn-primary" to='/administradorpedidos'>Pedidos</Link>
          </div>
        </Col>
        <Col md={10}>
          <Container>
            <h1 className="display-5">Productos del menú</h1>
            <div className="my-2">
              <Link className="btn btn-primary" to='/administradorproductos/crearproducto'>Agregar</Link>
            </div>
            <Table striped bordered hover size="sm" responsive="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Producto</th>
                  <th>Descripción</th>
                  <th>URL de Imagen</th>
                  <th>Precio</th>
                  <th>Categoria</th>
                  <th>Estado</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
              {
                listaProductos.map((producto, index) => <ItemProducto key={producto.id} producto={producto} posicion={index}></ItemProducto>)
              
              }
              </tbody>
            </Table>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default AdministradorProductos;