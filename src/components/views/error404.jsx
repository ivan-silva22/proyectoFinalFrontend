import "../../css/error404.css";
import { Link } from "react-router-dom";
import error from '../../assets/error404.jpg';

const Error404 = () => {
    return (
      <div className="container-fluid fondoBlanco letraGris">
        <div className="row justify-content-center d-flex">
          <div className="error">
            <img  src={error} alt="error404" />
            <p className="letraAmatic">Lo siento, la página que buscas no se encuentra disponible.</p>
            <p className="icons letraAmatic">
              <Link className='btn btn-primary' to={'/'}>Haz clic aquí para volver a la página principal</Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Error404;