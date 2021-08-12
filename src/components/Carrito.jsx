import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Producto from './Producto';
import img1 from '../img/carrito.png';

const Carrito = ({carrito, agregarProducto}) => ( 
            <div className='carrito'>
                <h4 className="mt-5">Tu carrito de compras </h4><img src={img1} className="mt-2 mb-3" width="40" height="40" alt=""></img>
                

                <div className='d-flex justify-content-around'>
                    {carrito.lenght === 0        
                    ?<p>No hay elementos en el carrito</p>
            

                        :carrito.map(producto => (
                            <Producto 
                                key={producto.id}
                                producto={producto}
                                carrito={carrito}
                                agregarProducto={agregarProducto}/>
                        )) }
                
                </div>
                </div>
            

      
 );
 
export default Carrito;