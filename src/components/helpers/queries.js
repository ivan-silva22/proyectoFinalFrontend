const URLProducto = import.meta.env.VITE_API_PRODUCTO;
const URLUsuario = import.meta.env.VITE_API_USUARIO;

export const login = async(usuario)=>{
    try{
        const respuesta = await fetch(URLUsuario);
        const listaUsuarios = await respuesta.json();
        const buscarUsuario = listaUsuarios.find((itemUsuario) => itemUsuario.email === usuario.email);
        if(buscarUsuario){
            if(buscarUsuario.password === usuario.password){
                return buscarUsuario;
            }else{
                return null;
            }
        }else{
            return null;
        }
       
    }catch(error){
        console.log(error)
    }
}

export const consultarAgregarProducto = async (producto) =>{
    try {
        const respuesta = await fetch(URLProducto, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });
        console.log(respuesta);
        return respuesta;
    } catch (error) {
        console.log(error)
    }
}

export const consultarListaProductos = async () =>{
    try {
        const respuesta = await fetch(URLProducto);
        const listaProductos = await respuesta.json();
        return listaProductos; 
    } catch (error) {
        console.log(error);
    }
}

export const consultarProducto = async (id) =>{
    try {
        const respuesta = await fetch(URLProducto+'/'+id);
        const producto = await respuesta.json();
        return producto; 
    } catch (error) {
        console.log(error);
    }
}

export const consultarEditarProducto = async (producto, id) =>{
    try{
        const respuesta = await fetch(URLProducto+'/'+id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta;
    }catch(error){
        console.log(error);
    }
}

export const consultarBorrarProducto = async (id) =>{
    try{
        const respuesta = await fetch(`${URLProducto}/${id}`, {
            method: "DELETE"
        });
        return respuesta;
    }catch(error){
        console.log(error);
    }
}