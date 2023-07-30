import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { consultarListaPedidos } from "../../helpers/queries";

const ItemPedido = ({ pedido, setListaPedidos }) => {
  console.log(pedido);

  return (
    <tr>
      <td>{pedido.id}</td>
      <td>{pedido.usuario}</td>
      <td>{pedido.fecha}</td>
      <td>{pedido.producto}</td>
      <td>{pedido.estado}</td>
    </tr>
  );
};

export default ItemPedido;
