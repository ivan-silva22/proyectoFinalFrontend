import { Card, Row } from "react-bootstrap";
import spaghetti from "../../../assets/spaghetti.jpg";
import ravioli from "../../../assets/ravioli.jpg";
import Orecchiette from "../../../assets/Orecchiette.jpg";
import Margherita from "../../../assets/margherita.jpeg";
import Marinara from "../../../assets/marinara.jpg";
import Formaggi from "../../../assets/formaggi.jpg";
import Diavola from "../../../assets/diavola.jpg";

const CardProducto = () => {
  return (
    <Row md={4} Ld={3} className="mb-3">
      <Card>
        <Card.Img variant="top" src={spaghetti} />
        <Card.Body>
          <Card.Title className="letraDancing">Spaghetti </Card.Title>
          <Card.Text>
            Uno de los tipos de pasta más populares y versátiles. Son largos y
            delgados, ideales para combinar con una variedad de salsas, desde la
            clásica bolognesa hasta la carbonara.
          </Card.Text>

          <footer className="blockquote-footer text-end">
            <cite title="Source Title">$ 2000</cite>
          </footer>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={ravioli} />
        <Card.Body>
          <Card.Title className="letraDancing">Ravioli </Card.Title>
          <Card.Text>
            Estas son pequeñas pastas rellenas que se cocinan hervidas. Pueden
            estar rellenas de queso, espinacas, carne o una combinación de
            ingredientes. Se sirven con diferentes salsas, como mantequilla y
            salvia, o con una salsa de tomate ligera.
          </Card.Text>

          <footer className="blockquote-footer text-end">
            <cite title="Source Title">$ 2600</cite>
          </footer>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={Orecchiette} />
        <Card.Body>
          <Card.Title className="letraDancing">Orecchiette </Card.Title>
          <Card.Text>
            Su nombre significa "orejas pequeñas" en italiano debido a su forma.
            Esta pasta es típica de la región de Puglia y se combina
            maravillosamente con verduras, como brócoli o col rizada, y se
            sazona con ajo, aceite de oliva y queso rallado.
          </Card.Text>

          <footer className="blockquote-footer text-end">
            <cite title="Source Title">$ 3000</cite>
          </footer>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="../../src/assets/ñoquis1.jpg" />
        <Card.Body>
          <Card.Title className="letraDancing">Gnocchi del Nonno </Card.Title>
          <Card.Text>
            Ñoquis caseros servidos con una exquisita salsa de cuatro quesos y
            toques de albahaca fresca.
          </Card.Text>

          <footer className="blockquote-footer text-end">
            <cite title="Source Title">$ 2100</cite>
          </footer>
        </Card.Body>
      </Card>

      {/* <h2 className="text-center">POSTRES</h2> */}

      <Card>
        <Card.Img variant="top" src={Margherita} />
        <Card.Body>
          <Card.Title className="letraDancing">Pizza Margherita </Card.Title>
          <Card.Text>
            Es un clásico italiano y una de las pizzas más emblemáticas. Lleva
            salsa de tomate, mozzarella fresca, albahaca y un chorrito de aceite
            de oliva. Los colores (rojo del tomate, blanco de la mozzarella y
            verde de la albahaca) representan la bandera italiana.
          </Card.Text>

          <footer className="blockquote-footer text-end">
            <cite title="Source Title">$ 2900</cite>
          </footer>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={Marinara} />
        <Card.Body>
          <Card.Title className="letraDancing">Pizza Marinara </Card.Title>
          <Card.Text>
            Una pizza simple pero deliciosa que lleva salsa de tomate, ajo,
            orégano y aceite de oliva. No lleva queso, pero su sabor es
            sorprendentemente sabroso.
          </Card.Text>

          <footer className="blockquote-footer text-end">
            <cite title="Source Title">$ 2400</cite>
          </footer>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={Formaggi} />
        <Card.Body>
          <Card.Title className="letraDancing">
            Pizza Quattro Formaggi{" "}
          </Card.Title>
          <Card.Text>
            Esta pizza lleva cuatro tipos de queso: mozzarella, gorgonzola,
            parmesano y provolone. Es una opción ideal para los amantes del
            queso.
          </Card.Text>

          <footer className="blockquote-footer text-end">
            <cite title="Source Title">$ 3200</cite>
          </footer>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={Diavola} />
        <Card.Body>
          <Card.Title className="letraDancing">Pizza Diavola </Card.Title>
          <Card.Text>
            Es una pizza picante que lleva salsa de tomate, mozzarella, salami
            picante y aceitunas. Perfecta para aquellos que disfrutan de un
            toque de picante.
          </Card.Text>

          <footer className="blockquote-footer text-end">
            <cite title="Source Title">$ 2600</cite>
          </footer>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default CardProducto;
