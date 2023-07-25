const URLProducto = import.meta.env.VITE_API_PRODUCTO;

export const consultarListaProductos = async () =>{
    try {
        const respuesta = await fetch(URLProducto);
        const listaProductos = await respuesta.json();
        return listaProductos; 
    } catch (error) {
        console.log(error);
    }
}
