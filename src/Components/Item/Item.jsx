import React from 'react';
import "./Item.css";
import { useNavigate } from 'react-router-dom';

const Item = ({ id, nombre, precio, img }) => {
    const navigate = useNavigate();

    const handleVerDetalles = () => {
        navigate(`/item/${id}`);
    };

    return (
        <div className='cardProductos'>
            <img src={img} alt={nombre} />
            <h3>Nombre: {nombre}</h3>
            <p>Precio: ${precio}</p>

            <button onClick={handleVerDetalles}>Ver más Detalles</button>
        </div>
    );
};

export default Item;