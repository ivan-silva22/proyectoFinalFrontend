import { Table, Container, Button, Row, Col } from "react-bootstrap";
import ItemProducto from "../Producto/ItemProducto";
import { useEffect, useState } from "react";

 

const AdministradorProductos = () => {
  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() =>{
    
  }, [])
  return (
    <Container>
      <Row>
        <Col md={2} className="mt-5 py-4">
          <h4>Opciones</h4>
          <div className="d-flex flex-column ">
            <Button variant="primary">Productos</Button>
            <Button variant="primary" className="my-2">
              Usuarios
            </Button>
            <Button variant="primary">Pedidos</Button>
          </div>
        </Col>
        <Col md={10}>
          <Container>
            <h1 className="display-5">Productos del menú</h1>
            <div className="my-2">
              <Button variant="primary">Agregar</Button>
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
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
              {
              <ItemProducto></ItemProducto>
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