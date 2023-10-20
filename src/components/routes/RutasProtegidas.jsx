import { Navigate } from "react-router";



const RutasProtegidas = ({ children }) => {
  const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuario")) || null;
  if (!usuarioLogueado) {
    return <Navigate to={"/login"} />;
  } else if (usuarioLogueado.es_admin === "No") {
    return <Navigate to={"/"} />;
  } else {
    return children;
  }
};


export default RutasProtegidas;