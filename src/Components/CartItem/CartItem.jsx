import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import './CartItem.css';

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext)

    return (
        <div>
            <h3>{item.nombre}</h3>
            <p>Cantidad: {cantidad}</p>
            <p>Precio:{item.precio}</p>
            <button onClick={()=>eliminarProducto(item.id)} className="botonElim">Eliminar</button>
        </div>
    )
}

export default CartItem