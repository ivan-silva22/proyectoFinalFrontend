import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { consultarBorrarProducto, consultarListaProductos } from "../../helpers/queries";

const ItemProducto = ({ producto,setListaProductos, posicion }) => {
  console.log(producto)
  const borrarProducto = () =>{
    Swal.fire({
      title: `¿Esta seguro de borrar el producto ${producto.nombreProducto}?`,
      text: "No se puede revertir este paso",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar',
    }).then((result) =>{
      if(result.isConfirmed){
        consultarBorrarProducto(producto.id).then((respuesta)=>{
          if(respuesta.status === 200){
            Swal.fire(
              'Producto eliminado',
              `El ${producto.nombreProducto} fue eliminado correctamente`,
              'success'
            );
            consultarListaProductos().then((respuesta)=> setListaProductos(respuesta))
          }else{
            Swal.fire(
              'Ocurrio un error',
              `Intente realizar esta operación nuevamente mas tarde`,
              'error'
            )
          }
        })
      }
    })
  }

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
                  <td>{producto.estado}</td>
                  <td>
                    <div className="d-flex justify-content-around">
                      <Link variant="warning" className='btn btn-warning' to={'/administradorproductos/editarproducto/'+producto.id}>Editar</Link>
                      <Button variant="danger" onClick={borrarProducto}>Eliminar</Button>
                    </div>
                  </td>
      </tr>
    );
};

export default ItemProducto;