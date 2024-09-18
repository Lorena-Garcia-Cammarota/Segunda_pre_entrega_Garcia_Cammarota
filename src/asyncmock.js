const misProductos = [
    {id: "1", nombre: "Camilla", precio: 550, img: "/img/Camilla.png", descripcion: "Decorativa planta de interior, muy vistosa por el elegante colorido de sus hojas.", stock: 5, idcat: "Plantas-Interiores"},
    {id: "2", nombre: "Monstera Adansonii", precio: 990, img: "/img/monstera adansonii.png", descripcion: "Planta tropical con hojas únicas y perforadas.", stock: 10, idcat: "Plantas-Interiores"},
    {id: "3", nombre: "Violetas", precio: 430, img: "/img/Violetas.png", descripcion: "Flores delicadas ideales para exteriores.", stock: 6, idcat: "Plantas-Exteriores"},
    {id: "4", nombre: "Jazmin", precio: 990, img: "/img/Jazmin.png", descripcion: "Planta fragante perfecta para decorar jardines.", stock: 15, idcat: "Plantas-Exteriores"},
    {id: "5", nombre: "Maceta", precio: 400, img: "/img/Maceta.png", descripcion: "Maceta resistente para todo tipo de plantas.", stock: 15, idcat: "Otros"},
    {id: "6", nombre: "Utensillos de Jardineria", precio: 720, img: "/img/UtensillosdeJardineria.png", descripcion: "Herramientas esenciales para cuidar tu jardín.", stock: 8, idcat: "Otros"},
    {id: "7", nombre: "Regadera", precio: 350, img: "/img/Regadera.png", descripcion: "Regadera ligera y fácil de usar.", idcat: "Otros"},
    {id: "8", nombre: "Bolsa de Tierra", precio: 600, img: "/img/BolsadeTierra.png", descripcion: "Tierra fértil para mejorar la calidad del suelo.", stock: 20, idcat: "Otros"},
];

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise (resolve =>{
        setTimeout(()=>{
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 100)
    })
}

export const getProductosPorCategorias = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const producto = misProductos.filter(item => item.idcat === idCategoria)
            resolve(producto)
        }, 100);

    })

}
