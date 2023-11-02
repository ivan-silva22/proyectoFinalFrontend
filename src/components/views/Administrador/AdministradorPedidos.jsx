
import { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import ItemPedido from "../Pedido/ItemPedido";
import { Link } from "react-router-dom";
import { consultarListaPedidos } from "../../helpers/queries";

const AdministradorPedidos = () => {
  const [pedidos, setPedidos] = useState([]);

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

          <div className="mb-3">
            <Button
              className="btnAgregarPedido"
              as={Link}
              to={"/administrar/pedidos/agregar-pedido"}
            >
              Agregar nuevo pedido
            </Button>
          </div>
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
                // setPedidos={setPedidos}
              ></ItemPedido>
            ))}
          </tbody>
        </Table>
      </section>
    </div>
  );
};

export default AdministradorPedidos;
