import { Button, Card, Container, Row, Col } from "react-bootstrap";
const Pedidos = () => {
  return (
    <Container className="my-4">
      <Row className="p-3 ">
        <Col md={8}>
          <Row>
            <Col sm={12} md={6}>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/8280002/pexels-photo-8280002.jpeg"
              />
            </Col>
            <Col sm={12} md={6}>
              <Card.Body>
                <Card.Title>
                  <h3>Empanadas de Carne</h3>
                </Card.Title>
                <Card.Text>
                  Sabrosas y calentitas, no te las podés perder. Son una
                  excelente elección como entrada para que abra el apetito
                  mientras esperamos lo que viene. Nuestra recomendación es
                  degustarlas con un delicioso malbec.
                </Card.Text>
                <Card.Text>
                  <h5>Precio: $2.500</h5>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm={12} md={6}>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/8280002/pexels-photo-8280002.jpeg"
              />
            </Col>
            <Col sm={12} md={6}>
              <Card.Body>
                <Card.Title>
                  <h3>Empanadas de Carne</h3>
                </Card.Title>
                <Card.Text>
                  Sabrosas y calentitas, no te las podés perder. Son una
                  excelente elección como entrada para que abra el apetito
                  mientras esperamos lo que viene. Nuestra recomendación es
                  degustarlas con un delicioso malbec.
                </Card.Text>
                <Card.Text>
                  <h5>Precio: $2.500</h5>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
          
        </Col>
        <Col md={4}>
          <Card className="border border-2">
            <Card.Body>
              <Card.Title>
                <h4>Resumen del pedido</h4>
                <hr />
              </Card.Title>
              <Card.Text>
                <h5>Total: $5000</h5>
              </Card.Text>
              <Button variant="primary">Hacer pedido</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Pedidos;
