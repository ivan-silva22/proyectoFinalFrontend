import { Button, Form, Container } from 'react-bootstrap';

function Registro() {
  return (
    <Container className="mainSection">
      <Form className='container m-5 p-5 letraDancing fs-5'>

<Form.Group className="mb-3" controlId="formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="nombre" placeholder="Ingresar nombre" />
        <Form.Text className="text-muted">
        
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formApellido">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="Apellido" placeholder="Ingresar apellido" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      
        
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        Nunca compartiremos su correo electrónico con nadie más.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
    </Container>
  );
}

export default Registro;

      

