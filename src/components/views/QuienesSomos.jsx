import "../../css/quienesSomos.css"
// import "../src/assets"
const QuienesSomos = () => {
    return (
      
        <main className="acercaNosotros fondoBlanco letraGris">
        <section className="conteiner">
          <article className="presentacion">
            <hr />
            <p className="h1 text-center letraAmatic d-flex justify-content-center">
            En Trattoria Tucumana, la pasión por la pasta es nuestra razón de ser, y esperamos compartir esta pasión contigo a través de cada exquisito bocado que pruebes. ¡Ven y únete a nosotros para disfrutar de una experiencia gastronómica auténtica y deliciosa! ¡Buon appetito!
            </p>
            <hr />
            <p className="h2 text-center letraAmatic d-flex justify-content-center">
              Los integrantes son
            </p>
          </article>
          <article className="row d-flex justify-content-around">
            <aside className="col-xl-4 col-sm-6 py-1">
              <img 
                src="../src/assets/Bellu.jpeg"
                className="participantes borde" 
                alt="Belu Bell" 
              />
              <div className="card-body">
                <p className="h3 text-center letraAmatic">
                 Belu Bell
                </p>
              </div>
            </aside>
            <aside className="row col-xl-4 col-sm-6 py-1">
              <img
                src="../src/assets/Hugo.jpeg"
                className="participantes borde"
                alt="Hugo Triunfetti"
              />
              <div className="card-body">
                <p className="h3 text-center letraAmatic">
                  Hugo Triunfetti
                </p>
              </div>
            </aside>
            <aside className="row col-xl-4 col-sm-6 pb-1 p">
              <img
                src="../src/assets/Ivan.jpeg"
                className="participantes borde"
                alt="Ivan Silva"
              />
              <div className="card-body">
                <p className="h3 text-center letraAmatic">
                  Ivan Silva
                </p>
              </div>
            </aside>
            <aside className="row col-xl-4 col-sm-6">
              <img
                src="../src/assets/Ro.jpeg"
                className="participantes borde"
                alt="Rosario Black Sleiman"
              />
              <div className="card-body">
                <p className="h3 text-center letraAmatic">
                  Rosario Black Sleiman
                </p>
              </div>
            </aside>
            <aside className="row col-xl-4 col-sm-6 py-1">
              <img
                src="../src/assets/yo2.jpeg"
                className="participantes borde"
                alt="Tomas Benjamin Quispe Navarro"
              />
              <div className="card-body">
                <p className="h3 text-center  letraAmatic">
                  Tomas Benjamin Quispe Navarro
                </p>
              </div>
            </aside>
          </article>
        </section>
      </main>
    );

};

export default QuienesSomos;