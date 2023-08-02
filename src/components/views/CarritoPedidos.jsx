import {Card, Row, Col} from "react-bootstrap";

const CarritoPedidos = ({producto}) => {
    console.log(producto);
    return (
        <Row>
            <Col sm={12} md={6}>
              <Card.Img
                variant="top"
                src={producto.imagen}
              />
            </Col>
            <Col sm={12} md={6}>
              <Card.Body>
                <Card.Title>
                  <h3 className='letraDancing'>{producto.nombreProducto}</h3>
                </Card.Title>
                <Card.Text className='letraDancing'>
                  {producto.descripcion}
                </Card.Text>
                <Card.Text>
                  <h5 className='letraDancing'>${producto.precio}</h5>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
    );
};

export default CarritoPedidos;