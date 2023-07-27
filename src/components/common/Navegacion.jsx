import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import '../../css/navbar.css';
import { Link, NavLink } from 'react-router-dom';


const Navegacion = () => {
  return (
    <Navbar bg="ligth" expand="lg" className="bg-body-primary">
      <Container>
        <Navbar.Brand as={Link} to= {'/'}>
          <img
            className="logoNavbar m-2 "
            src="../../src/assets/Trattoria Tucumana.png"
            alt="logo TrattoriaTucumana"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto letraAmatic fw-bold fs-3">
            <NavLink end className={'nav-item nav-link'} to ={'/'} >Inicio</NavLink>
            <NavLink end className={'nav-item nav-link'} to ={'Registro'}>Registrate</NavLink>
            <NavDropdown title="Administrar" id="basic-nav-dropdown">
              <NavLink end className={'nav-item nav-link'} to ={'administradorproductos'}>Productos</NavLink>
              <NavLink end className={'nav-item nav-link'} to ={'Administradorpedidos'}>Pedidos</NavLink>
              <NavLink end className={'nav-item nav-link'} to ={'administradorusuarios'}>Usuarios</NavLink>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavLink end className={'nav-item nav-link'} to ={''}>Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navegacion;
