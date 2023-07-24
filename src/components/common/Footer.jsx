import "../../css/footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";

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

          <article className="text-center letraAmatic fw-bold ">
            <h1> Quienes somos </h1> 
            <h1> Contactate con nosotros </h1>
          </article>
          <article className="text-center letraAmatic fw-bold">
            <h1> Segui nuestras redes sociales </h1>
            <div className="iconos text-center">
              <i className="bi bi-instagram linkSolo" ><span>Instagram</span> </i>   
              <i className="bi bi-facebook pt-1 linkSolo "><span>Facebook</span></i>
              <i className="bi bi-whatsapp linkSolo "> <span>Whatsapp</span> </i>
            </div>
          </article>
        </section>
      </footer>
    </>
  );
};
