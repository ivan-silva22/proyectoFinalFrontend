import { Button, Card, Container, Row, Col } from "react-bootstrap";
import CarritoPedidos from "./CarritoPedidos";
import { consultarProducto } from "../helpers/queries";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const Pedidos = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  
  useEffect(() =>{
    const productoJSON = localStorage.getItem("productoSeleccionado");
    if(productoJSON){
      const productoSeleccionado = JSON.parse(productoJSON);
      setProducto(productoSeleccionado);
    }else{
      consultarProducto(id).then((respuesta) =>{
        if(respuesta){
          setProducto(respuesta);
        }else{
          Swal.fire(
            "Ocurrio un error",
            "Intente esta operacion mas tarde",
            "error"
          );
        }
      })
    }
  }, [])

  
  
  return (
    <Container className="my-4 mainSection">
      <Row className="p-3 ">
        <Col md={8}>
          <CarritoPedidos producto={producto}></CarritoPedidos>
        </Col>
        <Col md={4}>
          <Card className="border border-2">
            <Card.Body>
              <Card.Title>
                <h4>Resumen del pedido</h4>
                <hr />
              </Card.Title>
              <Card.Text>
                <h5>Total:${producto.precio}</h5>
              </Card.Text>
              <Button variant="primary" type="submit" >Hacer pedido</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Pedidos;
