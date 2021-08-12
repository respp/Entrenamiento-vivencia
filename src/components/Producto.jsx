import React from 'react';
import {Button, Card} from 'react-bootstrap';
import Modall from './Modal';


    const Producto = ({producto, carrito, agregarProducto, productos}) => {
    const {nombre,precio,id,img}=producto;


    //Agregando al carrito
    const seleccionarProducto= id=>{
        const producto=productos.filter(producto => producto.id=== id)[0];
        agregarProducto([
            ...carrito,
            producto,
        ]); }

     //Eliminar producto
     const eliminarProducto= id=>{
        const productos=carrito.filter(producto => producto.id !== id)

        agregarProducto(productos)
    } 


    return ( 


        
        
<div className='col-4 my-3 '>


            <Card >
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    ${precio}
                </Card.Text>

                    {productos 
                    ?
                    (
                        <Button type= "button" onClick={ ()=> seleccionarProducto(id)} >Seleccionar</Button>
                    )
                    :
                    (
                        <div>
                        <Button type= "button" className="mx-3" onClick={ ()=> eliminarProducto(id)} >Eliminar</Button>
                        <Modall/>
                        
                        
                        </div>
                    )
                    }

                
            </Card.Body>
            </Card>



            </div>
           
    );
}
 
export default Producto;