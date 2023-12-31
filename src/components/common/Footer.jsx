import "../../css/footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <>
      <footer className="fondoBlanco letraGris">
        <section className="ordenFooter">
          <article>
            <img
              className="logo m-2"
              src="../../src/assets/Trattoria Tucumana.png"
              alt="logo TrattoriaTucumana"
            />
          </article>

          <article className="text-center letraAmatic fw-bold ">
            <h4> Quienes somos </h4>
            <h4> Contactate con nosotros </h4>
            <h4> Encontranos en </h4>
         
            <div>
            <i class="bi bi-geo-alt-fill">25 de mayo 2600</i>
            </div>
            
          </article>
          <article className="text-center letraAmatic fw-bold mt-4 mb-2">
            <h3 className="mb-3"> Segui nuestras redes sociales </h3>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <i className="bi bi-instagram linkSolo"></i>
                <p>Instagram</p>
              </div>
              <div>
                <i className="bi bi-facebook linkSolo"></i>
                <p>Facebook</p>
              </div>
              <div>
                <i className="bi bi-whatsapp linkSolo"></i>
                <p>Whatsapp</p>
              </div>
            </div>
          </article>
        </section>
      </footer>
    </>
  );
};

export default Footer;
