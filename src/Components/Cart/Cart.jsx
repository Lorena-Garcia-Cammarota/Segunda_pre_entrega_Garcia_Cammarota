import React from 'react';
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css';

const Cart = () => {
    const { carrito, total, cantidadTotal, vaciarCarrito } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <div className="carritoVacio">
                <h2 className="tituloCarrito">No hay productos en el carrito. ¡Compra o esperamos que vuelvas pronto!</h2>
                <Link to="/" className="boton">Ver Productos</Link>
            </div>
        );
    }

    return (
        <div className="carritoLleno">
            {carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)}

            <h3>Total: ${total}</h3>
            <h3>Cantidad Total: {cantidadTotal}</h3>
            <button onClick={() => vaciarCarrito()} className="boton">Vaciar Carrito</button>
            <Link to="/checkout" className="boton">Finalizar Compra</Link>
        </div>
    );
}

export default Cart;
