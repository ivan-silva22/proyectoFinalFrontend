import { Table, Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { consultarListaPedidos } from "../../helpers/queries";
import { useEffect, useState } from "react";
import ItemPedido from "../Pedido/ItemPedido";

const AdministradorPedidios = () => {
  const [listaPedidos, setListaPedidos] = useState([]);

  useEffect(() => {
    consultarListaPedidos().then((respuesta) => {
      setListaPedidos(respuesta);
    });
  }, []);

  return (
    <Container className="mainSection">
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
              {
                listaPedidos.map((pedido) => <ItemPedido key={pedido.id} pedido={pedido} setListaPedidos={setListaPedidos}></ItemPedido>)
              
              }
              </tbody>
            </Table>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default AdministradorPedidios;
