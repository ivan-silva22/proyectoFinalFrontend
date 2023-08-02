import { NavLink } from "react-router-dom";
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
            <div>
              <NavLink end className={"nav-item nav-link"} to={"/quienessomos"}>
                {" "}
                <h4>Quienes somos</h4>
              </NavLink>
            </div>

            <div>
              <NavLink end className={"nav-item nav-link"} to={"/erro404"}>
                {" "}
                <h4>Contactate con nosotros</h4>
              </NavLink>
            </div>

            <h4> Encontranos en </h4>

            <div>
              <i className="bi bi-geo-alt-fill">25 de mayo 2600</i>
            </div>
          </article>
          <article className="text-center letraAmatic fw-bold mt-4 mb-2">
            <h3 className="mb-3"> Segui nuestras redes sociales </h3>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <NavLink end className={"nav-item nav-link"} to={"/*"}>
                  {" "}
                  <i className="bi bi-instagram linkSolo iconos"></i>
                  <p>Instagram</p>
                </NavLink>
              </div>

              <div>
                <NavLink end className={"nav-item nav-link"} to={"/*"}>
                  {" "}
                  <i className="bi bi-facebook linkSolo iconos"></i>
                  <p>Facebook</p>
                </NavLink>
              </div>
              <div>
                <NavLink end className={"nav-item nav-link"} to={"/*"}>
                  {" "}
                  <i className="bi bi-whatsapp linkSolo iconos"></i>
                  <p>Whatsapp</p>
                </NavLink>
              </div>
            </div>
          </article>
        </section>
      </footer>
    </>
  );
};

export default Footer;
