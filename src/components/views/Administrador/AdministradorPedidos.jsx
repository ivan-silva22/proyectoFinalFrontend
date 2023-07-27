import { Table, Container, Button, Row, Col } from "react-bootstrap";

const AdministradorPedidios = () => {
    return (
        <Container>
      <Row>
        <Col md={2} className="mt-5 py-4">
          <h4>Opciones</h4>
          <div className="d-flex flex-column ">
            <Button variant="primary">Productos</Button>
            <Button variant="primary" className="my-2">Usuarios</Button>
            <Button variant="primary">Pedidos</Button>
          </div>
        </Col>
        <Col md={10}><Container>
        <h1 className="display-5">Pedidos</h1>
        <Table striped bordered hover size="sm" responsive="sm">
          <thead>
            <tr>
                  <th>#</th>
                  <th>Usuario</th>
                  <th>Fecha</th>
                  <th>Producto</th>
                  <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>admin</td>
              <td>27/07/2023</td>
              <td>Pizza</td>
              <td>Pendiente</td>
            </tr>
          </tbody>
        </Table>
      </Container></Col>
      </Row>
      
    </Container>
    );
};

export default AdministradorPedidios;