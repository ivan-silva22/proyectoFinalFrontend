import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import '../../css/navbar.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';


const Navegacion = ({usuarioLogueado, setUsuarioLogueado}) => {
  const navegacion = useNavigate();

  const logout = ()=>{
    setUsuarioLogueado({});
    sessionStorage.removeItem('usuario');
    navegacion('/Login');
  }

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
            <NavLink end className={'nav-item nav-link'} to ={'/pedidos'}>Pedidos</NavLink>
            
            {
                (usuarioLogueado.nombreUsuario)?(
                  <>
                  <NavLink end className={'nav-item nav-link'} to ={'/administradorproductos'}>Productos</NavLink>
                  <Button  variant="outline-secondary" onClick={logout}>Logout</Button>
                  </>
                ):(
                  <>
                    <NavLink end className={'nav-item nav-link'} to ={'/Registro'}>Registrate</NavLink>
                    <NavLink end className={'nav-item nav-link'} to ={'/Login'}>Login</NavLink>
                  </>
                )
                  
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navegacion;
