import React, { useState, useContext } from 'react';
import "./ItemDetail.css";
import Contador from '../Contador/Contador';
import { useNavigate } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';

const ItemDetail = ({ id, nombre, precio, img, descripcion, stock }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const { agregarAlCarrito } = useContext(CarritoContext);
    const navigate = useNavigate();

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        const item = { id, nombre, precio };
        agregarAlCarrito(item, cantidad);
    };

    return (
        <div className='contenedorItem'>
            <img src={img} alt={nombre} />
            <div className='info'>
                <h2>Nombre: {nombre} </h2>
                <h3>Precio: ${precio} </h3>
                <h3>ID: {id}</h3>
                <h3>Stock: {stock}</h3>
                <p>{descripcion}</p>
            </div>
            {agregarCantidad > 0 ? (
                <button onClick={() => navigate('/cart')}>Terminar Compra</button>
            ) : (
                <Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
            )}
        </div>
    );
};

export default ItemDetail;