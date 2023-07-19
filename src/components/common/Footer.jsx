import "../../css/footer.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

export const Footer = () => {
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

          <article className="text-center">
            <h5> Quienes somos </h5>
            <h5> Contactate con nosotros </h5>
          </article>
          <article className="text-center">
            <h5> Segui nuestras redes sociales </h5>
            <div className="d-flex justify-content-evenly">
              <p>ICONO ig</p>
              <i className="bi bi-instagram"></i>
              <p>ICONO fb</p>
              <i className="bi bi-facebook"></i>
              <p>ICONO wp</p>
              <i className="bi bi-"></i>
            </div>
          </article>
        </section>
      </footer>
    </>
  );
};
