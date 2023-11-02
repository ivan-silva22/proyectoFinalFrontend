import { Button } from "react-bootstrap";
import { cambiarEstadoPedido, consultarListaPedidos } from "../../helpers/queries";
import Swal from "sweetalert2";

const ItemPedido = ({ pedido, setPedidos, handleShow }) => {
  //console.log(pedido);
  const cambiarEstadoEntregado = () => {
    cambiarEstadoPedido(pedido._id).then((respuesta) => {
      if (respuesta) {
        if (respuesta && respuesta.status === 200) {
          Swal.fire({
            title: "Pedido Entregado",
            text: `El pedido N°${pedido._id} pasó a Entregado correctamente`,
            icon: "success",
          });
          consultarListaPedidos().then((repuesta) => {
            setPedidos(repuesta);
          });
        } else {
          Swal.fire(
            "Ocurrio un error",
            `El producto no fue creado correctamente`,
            "error"
          );
        }
        
      } else {
        Swal.fire(
          "Ocurrio un error",
          `El producto no fue creado correctamente`,
          "error"
        );
      }
    });
  };

  return (
    <tr>
      <td>{pedido._id}</td>
      <td>{pedido.fecha}</td>
      <td>{pedido.usuario.nombreUsuario}</td>
      <td>{pedido.estado}</td>
      <td>{pedido.precioTotal}</td>
      <td>
        <div className="d-flex justify-content-around">
          <Button variant="warning" onClick={cambiarEstadoEntregado}>
            {pedido.estado}
          </Button>
          <Button variant="primary" onClick={handleShow}>
        Ver Productos
      </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemPedido;
