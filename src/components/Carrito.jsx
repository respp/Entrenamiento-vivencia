import React from 'react';
import Producto from './Producto';
import img1 from '../img/carrito.png';
const Carrito = ({carrito, agregarProducto}) => ( 
    <div className='carrito'>
        <h4>Tu carrito de compras </h4><img src={img1} width="40" height="40" alt="..."></img>
        {carrito.lenght === 0        
        ?<p>No hay elementos en el carrito</p>
        
        :carrito.map(producto => (
            <Producto 
                key={producto.id}
                producto={producto}
                carrito={carrito}
                agregarProducto={agregarProducto}
            />
        )) }
    </div>
 );
 
export default Carrito;