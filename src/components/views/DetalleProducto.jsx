import { Container, Card, Row, Col } from "react-bootstrap";
import { consultarProducto } from "../helpers/queries";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  useEffect(() => {
    consultarProducto(id).then((respuesta) => {
      if (respuesta) {
        console.log(respuesta)
        setProducto(respuesta);
      } else {
        Swal.fire(
          "Ocurrio un error",
          "Intente esta operación en unos minutos",
          "error"
        );
      }
    });
  }, []);

  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src={producto.imagen}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>{producto.nombreProducto}</Card.Title>
              <hr />
              <Card.Text>
              {producto.descripcion}
                <br />
                <br />
                <span className="text-danger fw-semibold ">
                  Categoria:
                </span> {producto.categoria}
                <br />
                <span className="text-danger fw-semibold ">Precio:</span>{" "}
                ${producto.precio}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;