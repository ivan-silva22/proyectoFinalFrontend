import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemProducto = () => {
    return (
        <tr>
        {/* <td>{props.producto._id}</td> */}
        <td>{producto._id}</td>
        <td>{producto.nombreProducto}</td>
        <td>${producto.precio}</td>
        <td>{producto.imagen}</td>
        <td>{producto.categoria}</td>
        <td>
          <Link className="btn btn-warning" to={'/administrador/editar-producto/'+producto._id}>Editar</Link>
          <Button variant="danger" >
            Borrar
          </Button>
        </td>
      </tr>
    );
};

export default ItemProducto;