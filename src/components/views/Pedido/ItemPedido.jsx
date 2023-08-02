import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import { consultarListaPedidos } from "../../helpers/queries";

const ItemPedido = ({ pedido}) => {
  console.log(pedido);
const cambiarEstado = ()=> {
    console.log(cambiarEstado);
}

  return (
    <tr>
      <td>{pedido.id}</td>
      <td>{pedido.usuario}</td>
      <td>{pedido.fecha}</td>
      <td>{pedido.producto}</td>
      <td>
        <div className="d-flex justify-content-around">
          <Button variant="warning" onClick={cambiarEstado}>
            {pedido.estado}
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemPedido;
