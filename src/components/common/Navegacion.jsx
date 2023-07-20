import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "../../css/navbar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
//import { Person } from "react-bootstrap-icons";

const Navegacion = () => {
  return (
    <Navbar className="logoNavbar expandlg bg-body-tertiary">
      <Container className="d-flex flex-row-reverse">
      <Navbar.Brand href="#home">
          <img
            src="../../src/assets/Trattoria Tucumana.png"
            alt="Trattoria Tucumana"
          />
        </Navbar.Brand>

       


        <button
          class="logoNavbar"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
};
export default Navegacion;
