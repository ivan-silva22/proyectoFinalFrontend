import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

const ItemProducto = ({ producto, posicion }) => {
    return (
        <tr>
        <td>{posicion + 1}</td>
                  <td>{producto.nombreProducto}</td>
                  <td>
                    {producto.descripcion}
                  </td>
                  <td>
                    {producto.imagen}
                  </td>
                  <td>${producto.precio}</td>
                  <td>{producto.categoria}</td>
                  <td>
                    <div className="d-flex justify-content-around">
                      <Link variant="warning" to={'/administrador/editarproducto/'+producto.id}>Editar</Link>
                      <Button variant="danger">Eliminar</Button>
                    </div>
                  </td>
      </tr>
    );
};

export default ItemProducto;