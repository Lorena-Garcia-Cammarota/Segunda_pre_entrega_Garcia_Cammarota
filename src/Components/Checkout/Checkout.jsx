import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext"; 
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import Swal from 'sweetalert2';
import './Checkout.css'; 

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

    const manejadorFormulario = (e) => {
        e.preventDefault();
    
        setError("");
    
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor completa todos los campos obligatoriamente!");
            return;
        }
    
        if (email !== emailConfirmacion) {
            setError("Error. Los campos del email no coinciden");
            return;
        }
    
        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };
    
        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;
                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                });
            })
        )
        .then(() => {
            addDoc(collection(db, "ordenes"), orden)
                .then(docRef => {
                    setOrdenId(docRef.id);
                    vaciarCarrito();
    
                    Swal.fire({
                        title: '¡Compra exitosa!',
                        text: `Tu número de orden es: ${docRef.id}`,
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
    
                    setNombre("");
                    setApellido("");
                    setTelefono("");
                    setEmail("");
                    setEmailConfirmacion("");
                })
                .catch(error => {
                    console.error("Error al crear la orden: ", error);
                    setError("Se produjo un error al crear la orden!");
                });
        })
        .catch((error) => {
            console.error("No se pudo actualizar el stock", error);
            setError("No se puede actualizar el stock, intente comprar nuevamente");
        });
    };
    

    return (
        <div className="checkout-container">
            <h2> Checkout:</h2>
    
            <form onSubmit={manejadorFormulario}>
                <div className="product-list">
                    <div className="product-header">
                        <p>Producto</p>
                        <p>Cantidad</p>
                        <p>Precio</p>
                    </div>
                    {   
                        carrito.map(producto => (
                            <div key={producto.item.id} className="product-item">
                                <p>{producto.item.nombre}</p>
                                <p>$ {producto.item.precio} x {producto.cantidad}</p>
                                <p>$ {producto.item.precio}</p>
                            </div>
                        ))
                    }
                </div>
    
                <div>
                    <label htmlFor=""> Nombre </label>
                    <input type="text" onChange={(e) => setNombre(e.target.value)} value={nombre} />                
                </div>
                <div>
                    <label htmlFor=""> Apellido </label> 
                    <input type="text" onChange={(e) => setApellido(e.target.value)} value={apellido} /> 
                </div>
                <div>
                    <label htmlFor=""> Teléfono </label> 
                    <input type="text" onChange={(e) => setTelefono(e.target.value)} value={telefono} /> 
                </div>
                <div>
                    <label htmlFor=""> Email </label> 
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <label htmlFor=""> Email Confirmación </label> 
                    <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} value={emailConfirmacion}/>
                </div>
                
                {error && <p className="error-message">{error}</p>}
    
                <button type="submit"> Confirmar Compra </button>
            </form>
        </div>
    );
}

export default Checkout;
