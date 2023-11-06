import { useState, useEffect } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import ItemPedido from "../Pedido/ItemPedido";
import { Link } from "react-router-dom";
import { consultarListaPedidos } from "../../helpers/queries";

const AdministradorPedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    consultarListaPedidos()
      .then((repuesta) => {
        setPedidos(repuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mainSection">
      <section>
        <div className="d-flex justify-content-between align-items-center flex-column">
          <h1 className="text-center  fs-1 mt-md-4 mt-lg-5 mb-2">
            Administrar Pedidos
          </h1>

          {/* <div className="mb-3">
            <Button
              className="btnAgregarPedido"
              as={Link}
              to={"/administrar/pedidos/agregar-pedido"}
            >
              Agregar nuevo pedido
            </Button>
          </div> */}
        </div>

        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Fecha</th>
              <th>NombreUsuario</th>
              <th>Estado</th>
              <th>precioTotal</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido) => (
              <ItemPedido
                key={pedido._id}
                pedido={pedido}
                setPedidos={setPedidos}
                handleShow={handleShow}
              ></ItemPedido>
            ))}
          </tbody>
        </Table>
      </section>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Lista de Productos del Pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body><Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>producto</th>
          <th>cantidad</th>
          <th>subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Pizza</td>
          <td>2</td>
          <td>$6000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Flan</td>
          <td>2</td>
          <td>$1300</td>
        </tr>
      
      </tbody>
    </Table></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdministradorPedidos;
