import Carousel from "react-bootstrap/Carousel";
import CardProducto from "../views/Producto/CardProducto";
import { Container, Row } from "react-bootstrap";

const Inicio = () => {
  return (
    <section className="mainSection">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../src/assets/panqueques.jpg"
            alt="panqueques"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../src/assets/pastaCalzone2.jpg"
            alt="calzone"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../src/assets/pastaHorizontal3.jpg"
            alt="pasta"
          />
        </Carousel.Item>
      </Carousel>

      <Container>
        <h1 className="display-4">Nuestros Productos</h1>
        <hr />
        <Row>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
