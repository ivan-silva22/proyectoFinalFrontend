import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProducto = ({producto}) => {
  return (
    <Col md={4} ld={3} className="mb-3">
      <Card>
    <Card.Img variant="top" src={producto.imagen} />
    <Card.Body>
      <Card.Title className="letraDancing">{producto.nombreProducto}</Card.Title>
      <Card.Text className="letraDancing">
        {producto.descripcion}
      </Card.Text>

      <footer className="blockquote-footer text-end">
        <cite title="Source Title">${producto.precio}</cite>
        
      </footer>
      <Link className="btn btn-danger me-2" to={`/detalle/${producto.id}`}>Ver más</Link>
    </Card.Body>
  </Card>
    </Col>
  );
};

export default CardProducto;
