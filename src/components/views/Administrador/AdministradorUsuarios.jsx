import { Table, Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CargarUsuario from "./CargarUsuario";
import { useEffect, useState } from "react";
import { consultaListaUsuarios } from "../../helpers/queries";

const AdministradorUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    consultaListaUsuarios().then((respuesta) => {
      setUsuarios(respuesta);
    });
  }, []);

  return (
    <Container className="mainSection">
      <Row>
        <Col md={2} className="mt-5 py-4">
          <h4>Opciones</h4>
          <div className="d-flex flex-column ">
            <Link className="btn btn-primary" to='/administradorproductos/'>Productos</Link>
            <Link className="btn btn-primary my-2" to='/administradorproductos/usuarios'>Usuarios</Link>
            <Link className="btn btn-primary" to='/administradorproductos/pedidos'>Pedidos</Link>
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
              <th>id</th>
              <th>Email</th>
              <th>es admin?</th>
              <th>Usuario</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <CargarUsuario
                key={usuario._id}
                usuario={usuario}
                setUsuarios={setUsuarios}
              ></CargarUsuario>
            ))}
          </tbody>
        </Table>
      </Container></Col>
      </Row>
      
    </Container>
  );
};

export default AdministradorUsuarios;