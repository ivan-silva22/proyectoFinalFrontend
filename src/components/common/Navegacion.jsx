import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import '../../css/navbar.css';


const Navegacion = () => {
  return (
    <Navbar bg="ligth" expand="lg" className="bg-body-primary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            className="logoNavbar m-2 "
            src="../../src/assets/Trattoria Tucumana.png"
            alt="logo TrattoriaTucumana"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto letraAmatic fw-bold fs-3">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="/Registro">Registrate</Nav.Link>
            <NavDropdown title="Administrar" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Productos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pedidos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Usuarios</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="#link">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navegacion;
