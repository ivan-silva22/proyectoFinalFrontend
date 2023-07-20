import { Button } from 'react-bootstrap';
import error from '../../assets/fondo-Error404'
const Error404 = () => {
    return (
        <section className="mainSection text-center">
            <img src={error} alt="fondo pagina error 404" />
            <div>
            <Button variant='primary' >Volver al inicio</Button>

            </div>
        </section>
    );
};

export default Error404;