import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

const ItemProducto = () => {
    return (
        <tr>
        {/* <td>{props.producto._id}</td> */}
        <td>1</td>
                  <td>Empanadas de carne</td>
                  <td>
                    alguna descripcion
                  </td>
                  <td>
                    https://images.pexels.com/photos/8280002/pexels-photo-8280002.jpeg
                  </td>
                  <td>$2500</td>
                  <td>Entrada</td>
                  <td>
                    <div className="d-flex justify-content-around">
                      <Button variant="warning">Editar</Button>
                      <Button variant="danger">Eliminar</Button>
                    </div>
                  </td>
      </tr>
    );
};

export default ItemProducto;