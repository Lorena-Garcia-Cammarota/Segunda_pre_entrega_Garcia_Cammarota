import React from 'react'
import './CartWidget.css'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext)

  return (
    <div>
      <Link to="/cart">
      <img className='imgCarrito' src="https://cdn-icons-png.flaticon.com/512/5087/5087847.png" alt="Carrito de compras"/>
      </Link>
        {
          cantidadTotal > 0 && <strong>{cantidadTotal}</strong>
        }   
    </div>
  )
}

export default CartWidget
