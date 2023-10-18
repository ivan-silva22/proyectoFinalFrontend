import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CargarUsuario = ({ usuario, setUsuarios }) => {
    const borrarUsuario = () => {
      Swal.fire({
        title: `¿Estas seguro ${usuario.nombre}?`,
        text: "Esto se borrara para siempre!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, borralo",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          consultaBorrarUsuario(usuario._id).then((respuesta) => {
            if (respuesta.status === 200) {
              Swal.fire(
                "Usuario Eliminado!",
                `El ${usuario.nombre} fue eliminado correctamente`,
                "success"
              );
  
              consultaListaUsuarios().then((respuesta) => setUsuarios(respuesta));
            } else {
              Swal.fire(
                "Ocurrio un error!",
                `intente realizar esto mas tarde`,
                "error"
              );
            }
          });
        }
      });
    };
  
    return (
      <tr>
        <td>{usuario.id}</td>
        <td>{usuario.email}</td>
        <td>{usuario.es_admin}</td>
        <td>{usuario.nombreUsuario}</td>
        <td>
          <Link
            className="btn btn-warning"
            to={"/administradorproductos/usuarios/editarusuario/" + usuario.id}
          >
            Editar
          </Link>
          <Button className="m-2" variant="danger" onClick={borrarUsuario}>
            Borrar
          </Button>
        </td>
        
      </tr>
    );
  };
  
  export default CargarUsuario;