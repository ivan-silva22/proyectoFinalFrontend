const URLProducto = import.meta.env.VITE_API_PRODUCTO;
const URLUsuario = import.meta.env.VITE_API_USUARIO;


export const iniciarSesion = async (usuario)=>{
    try{
        const respuesta = await fetch(URLUsuario,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });

        const datos = await respuesta.json();
        return {
            status: respuesta.status,
            nombreUsuario: datos.nombreUsuario 
        }
        
    }catch(error){
       console.log(error); 
       return null;
    }
} 

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