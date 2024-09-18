import React from 'react'
import { useState, useEffect } from 'react'
import { getProductos, getProductosPorCategorias } from '../../asyncmock';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const {idCategoria} = useParams()

    useEffect(() => {
        const funcionProductos = idCategoria ? getProductosPorCategorias : getProductos;

        funcionProductos(idCategoria)
        .then(res => setProductos(res))
        
    }, [idCategoria])


    return (
        <div>
            <h2 style={{color: "green", textAlign: "center", marginTop: "15px"}}>Catálogo de Productos</h2>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer 
