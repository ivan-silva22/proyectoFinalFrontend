import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { consultaAgregarUsuario } from "../helpers/queries";


const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  const onSubmit = (usuarioNuevo) => {
    consultaAgregarUsuario(usuarioNuevo).then((respuestaCreated) => {
      console.log(respuestaCreated);
      if (respuestaCreated && respuestaCreated.status === 201) {
        if (usuarioNuevo.tipoUsuario === "admin") {
          // Lógica para el administrador
          Swal.fire(
            'Administrador creado',
            `El administrador ${usuarioNuevo.nombreUsuario} fue creado correctamente`,
            'success'
          );
        } else {
          // Lógica para usuario común
          Swal.fire(
            'Usuario creado',
            `El usuario ${usuarioNuevo.nombreUsuario} fue creado correctamente`,
            'success'
          );
        }
        reset();
      } else {
        Swal.fire(
          'Ocurrió un error',
          `El usuario ${usuarioNuevo.nombreUsuario} no fue creado, inténtelo más tarde`,
          'error'
        );
      }
    });
  };
  
  return (
    <section className="container mainSection h5 fs-4 letraDancing">
      <h1 className="display-4 mt-5">Nuevo usuario</h1>
      <hr />

      




      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreUsuario">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: juan123"
            {...register("nombreUsuario", {
              required: "El nombre de usuario es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad mínima de caracteres es de 2 dígitos",
              },
              maxLength: {
                value: 100,
                message: "La cantidad máxima de caracteres es de 100 dígitos",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreUsuario?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ej: ejemplo@correo.com"
            {...register("email", {
              required: "El correo electrónico es obligatorio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Correo electrónico inválido",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.email?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ej: ********"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.password?.message}
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default Registro;





  



      

