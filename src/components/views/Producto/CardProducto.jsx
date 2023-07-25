import {Button, Card, Col}  from 'react-bootstrap';


const CardProducto = () => {
  return (

    <Col md= {4} Ld= {3} className='mb-3'>
    <Card>
      <Card.Img 
      variant="top" 
      src="../../src/assets/ñoquis1.jpg" 
      />
      <Card.Body>
        <Card.Title className='letraDancing'>Gnocchi del Nonno </Card.Title>
        <Card.Text >
         Ñoquis caseros servidos con una exquisita salsa de cuatro quesos y toques de albahaca fresca.
        </Card.Text>
        <Button variant="primary">Servir</Button>
        <footer className="blockquote-footer text-end">
             <cite title="Source Title">$ 2100</cite>
          </footer>
      </Card.Body>
    </Card>

    
    </Col>

  );
}

export default CardProducto;