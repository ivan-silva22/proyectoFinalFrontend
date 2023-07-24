import { Table, Container, Button, Row, Col } from "react-bootstrap";

const AdministradorProductos = () => {
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
                <tr>
                  <td>1</td>
                  <td>Empanadas de carne</td>
                  <td>
                    alguna descripcion
                  </td>
                  <td>
                    https://images.pexels.com/photos/8280002/pexels-photo-8280002.jpeg
                  </td>
                  <td>$2500</td>
                  <td>Entrada</td>
                  <td>
                    <div className="d-flex justify-content-around">
                      <Button variant="warning">Editar</Button>
                      <Button variant="danger">Eliminar</Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Flan casero</td>
                  <td>
                    alguna descripcion
                  </td>
                  <td>
                    {" "}
                    https://images.pexels.com/photos/8280002/pexels-photo-8280002.jpeg
                  </td>
                  <td>$2000</td>
                  <td>Postre</td>
                  <td>
                    <div className="d-flex justify-content-around">
                      <Button variant="warning">Editar</Button>
                      <Button variant="danger">Eliminar</Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default AdministradorProductos;