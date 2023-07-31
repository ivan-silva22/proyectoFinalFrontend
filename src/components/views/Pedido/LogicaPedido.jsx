import React, { useState, useEffect } from 'react';
import { consultarListaPedidos } from "../../helpers/queries";
import { ItemPedido, cambiarEstado } from "../Pedido/ItemPedido";



const ListaProducto = ({ pedidos, ItemPedido }) => {
  return (
    <div>
      <h1>Productos disponibles:</h1>
      <div>
        {pedidos.map((pedido) => (
          <div key={pedido.id}>
            <span>{pedido.name} - ${pedido.price.toFixed(2)}</span>
            <button onClick={() => ItemPedido(pedido)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const CarroCompra = ({ carrito, removeDesdeCarrito, OrdenFinalizada }) => {
  return (
    <div>
      <h2>Carrito de Compra:</h2>
      <div>
        {carrito.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
            carrito.map((pedido, index) => (
            <div key={index}>
              <span>{pedido.nombreProducto} - ${pedido.precio.toFixed(2)}</span>
              <button onClick={() => removeDesdeCarrito(index)}>Eliminar</button>
            </div>
          ))
        )}
      </div>
      <button onClick={OrdenFinalizada}>Finalizar compra</button>
    </div>
  );
};

const App = () => {
  const [pedidos] = cambiarEstado([]);

  const [carrito, conjuntoCarrito] = cambiarEstado([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('carrito')) || [];
    conjuntoCarrito(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const ItemPedido = (pedido) => {
    conjuntoCarrito((anteriorCarrito) => [...anteriorCarrito, pedido]);
  };
  const removeDesdeCarrito = (index) => {
    conjuntoCarrito((anteriorCarrito) => {
      const carritoActualizado = [...anteriorCarrito];
      carritoActualizado.splice(index, 1);
      return carritoActualizado;
    });
  };

  const OrdenFinalizada = () => {
    alert('Compra finalizada con éxito.');
  };

  return (
    <div>
      <ListaProducto pedidos={pedidos} ItemPedido={ItemPedido} />
      <CarroCompra carrito={carrito} OrdenFinalizada={OrdenFinalizada} />
    </div>
  );
};

export default ListaProducto