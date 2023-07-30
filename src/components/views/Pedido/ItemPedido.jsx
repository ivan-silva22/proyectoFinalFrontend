import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { consultarListaPedidos } from "../../helpers/queries";

const ItemPedido = ({ pedido, setListaPedidos }) => {
  console.log(pedido);

  return (
    <tr>
      <td>1</td>
      <td>admin</td>
      <td>27/07/2023</td>
      <td>Pizza</td>
      <td>Pendiente</td>
    </tr>
  );
};

export default ItemPedido;
