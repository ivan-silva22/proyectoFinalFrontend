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
            "Administrador creado",
            `El administrador ${usuarioNuevo.nombreUsuario} fue creado correctamente`,
            "success"
          );
        } else {
          // Lógica para usuario común
          Swal.fire(
            "Usuario creado",
            `El usuario ${usuarioNuevo.nombreUsuario} fue creado correctamente`,
            "success"
          );
        }
        reset();
      } else {
        Swal.fire(
          "Ocurrió un error",
          `El usuario ${usuarioNuevo.nombreUsuario} no fue creado, inténtelo más tarde`,
          "error"
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
            placeholder="Ingrese un nombre de usuario"
            {...register("nombre", {
              required: {
                value: true,
                message: "El Usuario es un dato obligatorio",
              },
              pattern: {
                value: /^(?!\s)(?!.*\s$)[a-zA-Z\s]+$/,
                message:
                  "El usuario debe contener solo letras y espacios y no puede empezar ni terminar con espacios.",
              },
            })}
            maxLength={35}
          />

          {errors.nombre && (
            <div className="text-danger">
              {errors.nombre.type === "required" && (
                <p>El usuario es un dato obligatorio.</p>
              )}
              {errors.nombre.type === "pattern" && (
                <p>{errors.nombre.message}</p>
              )}
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder="Ingrese un email"
            type="email"
            {...register("email", {
              required: "El email es un dato obligatorio",
              pattern: {
                value:
                  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                message:
                  "El email debe cumplir con el formato mail@dominio.com",
              },
              validate: (value) => {
                const trimmedValue = value.trim();
                if (value !== trimmedValue) {
                  return "No se permiten espacios al principio y al final del email";
                }
              },
            })}
            maxLength={50}
          />
          {errors.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>

          <Form.Control
            
            placeholder="Contraseña"
            {...register("password", {
              required: "La contraseña es un dato obligatorio",
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[\w\d\S]{8,50}$/,
                message: () => {
                  let mensajeError =
                    "La contraseña no cumple con los requisitos debe tener entre 8 y 50 caracteres y no incluir espacios.";
                  const valorContraseña =
                    errors.password && errors.password.ref.value;

                  if (valorContraseña && !/[A-Z]/.test(valorContraseña)) {
                    mensajeError +=
                      " La contraseña debe contener al menos una mayúscula.";
                  }

                  if (valorContraseña && !/[a-z]/.test(valorContraseña)) {
                    mensajeError +=
                      " La contraseña debe contener al menos una minúscula.";
                  }

                  if (valorContraseña && !/\d/.test(valorContraseña)) {
                    mensajeError +=
                      " La contraseña debe contener al menos un dígito.";
                  }

                  return mensajeError;
                },
              },
            })}
            minLength={8}
            maxLength={50}
          />

          {errors.password && (
            <div className="text-danger">
              {errors.password.type === "required" && (
                <p>La contraseña es un dato obligatorio.</p>
              )}
              {errors.password.type === "pattern" && (
                <p>{errors.password.message()}</p>
              )}
            </div>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default Registro;
