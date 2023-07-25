import { Navigate } from "react-router";



const RutasProtegidas = ({children}) => {
    const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuario')) || null
    if(!usuarioLogueado){
        return <Navigate to={'/administradorproductos'}></Navigate>
    }else{
        return children;
    }
};

export default RutasProtegidas;