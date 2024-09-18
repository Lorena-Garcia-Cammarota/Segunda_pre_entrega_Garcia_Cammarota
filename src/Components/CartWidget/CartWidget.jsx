import React from 'react'
import "./CartWidget.css"

const CartWidget = () => {

  return (
    <div>
        <img className='imgCarrito' src="https://cdn-icons-png.flaticon.com/512/5087/5087847.png" alt="Carrito de compras" />
        <strong className='cantCarrito'>8</strong>
    </div>
  )
}

export default CartWidget