import Carousel from "react-bootstrap/Carousel";
import CardProducto from "../views/Producto/CardProducto";
import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { consultarListaProductos } from "../helpers/queries";


const Inicio = () => {

  const [productos, setProductos] = useState([]);
  
  useEffect(()=>{
    consultarListaProductos().then((respuesta)=>{
      setProductos(respuesta)
    })
  },[])

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
        <h1 className="display-5 mt-5 letraDancing text-center">Nuestra Carta</h1>
        <hr />
        <h1 className=" mt-1 letraDancing">Recomendados</h1>
        <hr />

        <Row>
          {
            productos.map((producto) => <CardProducto key={producto.id} producto={producto}></CardProducto>)
          }
          
        </Row>

      </Container>

      
        
    </section>
  );
};

export default Inicio;
          
          
          
