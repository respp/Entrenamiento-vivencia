import React, { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navv from './components/Nav';
import './estilos/App.css';
import Footer from './components/Footer';
import Modall from './components/Modal';
import Producto from './components/Producto';
import Slider from './components/Slider';
import Carrito from './components/Carrito';
import img1 from './img/nike.jpg';
import img2 from './img/nike2.jpg';
import img3 from './img/nike3.jpg';
import img4 from './img/nike4.jpg';
import img5 from './img/nike5.jpg';
import img6 from './img/nike6.jpg';

function App() {

    //Creando un listado de productos

    const [productos, guardarProductos] = useState([
        { id: 1, nombre: 'Zapatillas Nike Air Max Excee', precio: 15.499, img: img1 },
        { id: 2, nombre: 'Zapatillas Nike Air Max 270', precio: 21.729, img: img2 },
        { id: 3, nombre: 'Zapatillas Nike Air Max Infinity', precio: 17.499, img: img3},
        { id: 4, nombre: 'Zapatillas Nike Air Force 1 Sage Low', precio: 17.999, img: img4},
        { id: 5, nombre: 'Zapatillas Nike Air Max Dia', precio: 18.999, img: img5},
        { id: 6, nombre: 'Zapatillas Nike Sb Charge Suede', precio: 11.499, img: img6}
    ]);

    
    // State para un carrito de compras

    const [carrito, agregarProducto] = useState([

        ])
        //Obtener la fecha

    const fecha = new Date().getFullYear();

    return ( <div>
            <Modall/>
            <Navv/>

            <Slider/>
            <h1 className="my-5"> ZAPATILLAS </h1>  
            
            <div className="container my-5" >

                <div className="row my-5 text-center" > 

                    
                        {
                        productos.map(producto => ( <
                            Producto key = { producto.id }
                            producto = { producto }
                            productos = { productos }
                            carrito = { carrito }
                            agregarProducto = { agregarProducto }
                            />
                        ))
                        } 

                </div>
                
                <Carrito carrito = { carrito } agregarProducto = { agregarProducto }/>

                </div>


                


                        

               
            <Footer fecha = { fecha }/> 

            </div>
    );
}

export default App;