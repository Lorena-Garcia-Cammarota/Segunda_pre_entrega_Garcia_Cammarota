import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mundo-plantas-online.firebaseapp.com",
    projectId: "mundo-plantas-online",
    storageBucket: "mundo-plantas-online.appspot.com",
    messagingSenderId: "703482521069",
    appId: "1:703482521069:web:7395118bd771379418b3e4"
};


const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)

/*const misProductos = [
    {nombre: "Camilla", precio: 550, img: "/img/Camilla.png", descripcion: "Decorativa planta de interior, muy vistosa por el elegante colorido de sus hojas.", stock: 5, idcat: "Plantas-Interiores"},
    {nombre: "Monstera Adansonii", precio: 990, img: "/img/monstera adansonii.png", descripcion: "Planta tropical con hojas únicas y perforadas.", stock: 10, idcat: "Plantas-Interiores",
    {nombre: "Violetas", precio: 430, img: "/img/Violetas.png", descripcion: "Flores delicadas ideales para exteriores.", stock: 6, idcat: "Plantas-Exteriores",
    {nombre: "Jazmin", precio: 990, img: "/img/Jazmin.png", descripcion: "Planta fragante perfecta para decorar jardines.", stock: 15, idcat: "Plantas-Exteriores"},
    {nombre: "Maceta", precio: 400, img: "/img/Maceta.png", descripcion: "Maceta resistente para todo tipo de plantas.", stock: 15, idcat: "Otros", "orden": 3},
    {nombre: "Utensillos de Jardineria", precio: 720, img: "/img/UtensillosdeJardineria.png", descripcion: "Herramientas esenciales para cuidar tu jardín.", stock: 8, idcat: "Otros",
    {nombre: "Regadera", precio: 350, img: "/img/Regadera.png", descripcion: "Regadera ligera y fácil de usar.", stock: 10, idcat: "Otros", "orden": 3},
    {nombre: "Bolsa de Tierra", precio: 600, img: "/img/BolsadeTierra.png", descripcion: "Tierra fértil para mejorar la calidad del suelo.", stock: 20, idcat: "Otros"},
];*/

import {collection, doc, writeBatch} from "firebase/firestore"

const subirProductos = async () => {

    const batch = writeBatch(db)

    const productosRef = collection(db, "productos")

    misProductos.forEach((producto)=>{

        const nuevoDoc = doc(productosRef) 

        batch.set(nuevoDoc, producto)

    })

    try {

        await batch.commit();

        console.log("Productos subidos exitosamente")

    } catch(error) {

        console.log("Error subiendo productos:", error)

    }

}

subirProductos()