import React, {Fragment, useState} from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import Navv from './components/Nav';
import './estilos/App.css';
import Footer from './components/Footer';
import Modall from './components/Modal';
import Producto from './components/Producto';
import Slider from './components/Slider';
import Carrito from './components/Carrito';
function App() {

  //Creando un listado de productos

  const[productos, guardarProductos]=useState([ 
    { id:1, nombre:'Zapatillas Nike Air Max Excee', precio:15.499 },
    { id:2, nombre:'Zapatillas Nike Air Max 270', precio:21.729 },
    { id:3, nombre:'Zapatillas Nike Air Max Infinity', precio:17.499 }
  ]);
 // State para un carrito de compras

  const [carrito, agregarProducto]=useState([

  ])
  //Obtener la fecha

  const fecha=new Date().getFullYear();
  
  return (
    <Fragment>
      <Modall />
      <Navv />
      <h1>ZAPATILLAS</h1>     
      <Slider />  
      
      {productos.map(producto => (
          <Producto
            key={producto.id}
            producto={producto}
            productos={productos}
            carrito={carrito}
            agregarProducto={agregarProducto}
          />
          ))}
      <Carrito 
      carrito={carrito}
      agregarProducto={agregarProducto}
      />
      <Footer
      fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
