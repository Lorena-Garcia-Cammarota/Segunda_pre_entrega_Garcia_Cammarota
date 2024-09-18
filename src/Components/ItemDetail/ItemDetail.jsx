import React from 'react'
import "./ItemDetail.css"
import Contador from '../Contador/Contador'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ItemDetail = ({id, nombre, precio, img, descripcion, stock}) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        console.log("Productos agregador:" + cantidad)
    }

    return (
        <section className='contenedorItem'>
            <img src={img} alt={nombre} />
            <div className='info'>
                <h2>Nombre: {nombre} </h2>
                <h3>Precio ${precio} </h3>
                <h3>Stock {stock} </h3>
                <p> {descripcion} </p>
                
            
            </div>
        {
            
            agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }

        </section>
    )
}

export default ItemDetail