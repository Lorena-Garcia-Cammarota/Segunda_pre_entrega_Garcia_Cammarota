import React from 'react';
import "./Item.css";
import { useNavigate } from 'react-router-dom';


const Item = ({ id, nombre, precio, img, stock}) => {
    const navigate = useNavigate();

    const handleVerDetalles = () => {
        navigate(`/item/${id}`);
    };

    return (
        <div className='cardProductos'>
                <div className='cardProducto'>
                    <img src={img} alt={nombre} />
                    <h3>Nombre: {nombre} </h3>
                    <p>Precio: ${precio} </p>
                    <p>ID: {id} </p>
                    <p>Stock: {stock}</p>
                    <button onClick={handleVerDetalles}>Ver más Detalles</button>            
            </div>
        </div>
    );
};

export default Item