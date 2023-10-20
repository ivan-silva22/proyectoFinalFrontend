import { Form, Button, Container, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { login } from "../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    console.log(usuario);
    login(usuario).then((respuesta) => {
      if (respuesta) {
        sessionStorage.setItem("usuario", JSON.stringify(respuesta));
        setUsuarioLogueado(respuesta);
        reset();
        navegacion("/administradorproductos");
        Swal.fire(
          "Bienvenido",
          `${respuesta.nombreUsuario} iniciaste sesion correctamente`,
          "success"
        );
      } else {
        Swal.fire("Error", "El email o password son incorrectos", "error");
      }
    });
  };

  return (
    <Container className="mainSection letraDancing h5 fs-5">
      <Card className="my-5">
        <Card.Header as="h5">Login</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese un email"
                {...register("email", {
                  required: "El email es un dato obligatorio",
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=? ^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a -z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:
                      "El email debe tener el siguiente formato mail@dominio.com",
                  },
                })}
                maxLength={50}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  {...register("password", {
                    required: "La contraseña es un dato obligatorio",
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[\w\d\S]{8,100}$/,
                      message: () => {
                        let errorMessage =
                          "La contraseña no cumple con los requisitos.";
                        const passwordValue =
                          errors.password && errors.password.ref.value;

                        if (passwordValue && !/[A-Z]/.test(passwordValue)) {
                          errorMessage +=
                            " La contraseña debe contener al menos una mayúscula.";
                        }

                        if (passwordValue && !/[a-z]/.test(passwordValue)) {
                          errorMessage +=
                            " La contraseña debe contener al menos una minúscula.";
                        }

                        if (passwordValue && !/\d/.test(passwordValue)) {
                          errorMessage +=
                            " La contraseña debe contener al menos un dígito.";
                        }

                        return errorMessage;
                      },
                    },
                  })}
                  minLength={8}
                  maxLength={100}
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
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
