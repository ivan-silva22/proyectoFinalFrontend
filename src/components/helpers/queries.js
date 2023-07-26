

const URLProducto = import.meta.env.VITE_API_PRODUCTO;

export const consultarAgregarProducto = async (producto) =>{
    try {
        const respuesta = await fetch(URLProducto, {
            method: "POST",
            headres: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });
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