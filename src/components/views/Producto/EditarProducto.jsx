import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { consultarProducto } from "../../helpers/queries";
import Swal from "sweetalert2";

const EditarProducto = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset
    setValue
  } = useForm();

  const {id} = useParams();

  useEffect(()=>{
    consultarProducto(id).then((respuesta)=>{
      if(respuesta){
        setValue('nombreProducto', respuesta.nombreProducto);
        setValue('precio', respuesta.precio);
        setValue('imagen', respuesta.imagen);
        setValue('categoria', respuesta.categoria);
        setValue('descripcion', respuesta.descripcion);
      }else{
        Swal.fire('Ocurrio un error', `El producto ${productoNuevo.nombreProducto} no fue creado correctamente`, 'error');
      }
    })
  }, [])

  const onSubmit = (productoEditado) =>{
    consultaEditarProducto(productoEditado, id).then((respuesta)=>{
      if(respuesta && respuesta.status === 200){
        Swal.fire('Producto editado', `El producto ${productoEditado.nombreProducto} fue editado correctamente`, 'success');
        navegacion('/administrador');
      }else{
        Swal.fire('Ocurrio un error', `El producto ${productoEditado.nombreProducto} no fue editado, intentelo mas tarde`, 'error');
      }
     })
  }
    return (
        <section className="container mainSection">
      <h1 className="display-4 mt-5">Editar producto</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProducto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Lasagna"
            {...register("nombreProducto", {
              required: "El nombre del producto es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
              maxLength: {
                value: 100,
                message: "La cantidad maxima de caracteres es de 100 digitos",
              },
            })}
          />
          <Form.Text className="text-danger">
          {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 1000"
            {...register("precio", {
              required: "El precio del producto es obligatorio",
              min: {
                value: 1,
                message: "El precio minimo es de $1",
              },
              max: {
                value: 10000,
                message: "El precio maximo es de $10000",
              },
            })}
          />
          <Form.Text className="text-danger">
          {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripcion*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Lasagna rellena de jamón..."
            {...register("descripcion", {
              required: "la descripcion del producto es obligatoria",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
              maxLength: {
                value: 300,
                message: "La cantidad maxima de caracteres es de 300 digitos",
              },
            })}
          />
          <Form.Text className="text-danger">
          {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La imagen es obligatoria",
            })}
          />
          <Form.Text className="text-danger">
          {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
             {...register("categoria", {
              required: "La categoria es obligatoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="pastas">Pastas</option>
            <option value="postres">Postres</option>
            <option value="bebidas">Bebidas</option>
          </Form.Select>
          <Form.Text className="text-danger">
            
          {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
    );
};

export default EditarProducto;