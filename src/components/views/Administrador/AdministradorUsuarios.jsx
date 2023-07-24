import { Table, Container, Button, Row, Col } from "react-bootstrap";

const AdministradorUsuarios = () => {
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
        <h1 className="display-5">Lista de usuarios</h1>
        <div className="my-2">
          <Button variant="primary">Agregar</Button>
        </div>
        <Table striped bordered hover size="sm" responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Emanuel</td>
              <td>Perez</td>
              <td>emanuelp@gmail.com</td>
              <td>Administrador</td>
              <td>
                <div className="d-flex justify-content-around">
                  <Button variant="warning">Editar</Button>
                  <Button variant="danger">Eliminar</Button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container></Col>
      </Row>
      
    </Container>
  );
};

export default AdministradorUsuarios;