import React from 'react';
const Producto = ({producto, carrito, agregarProducto, productos}) => {
    const {nombre,precio,id}=producto;

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
        <div className='producto'>
            <h2>{nombre}</h2>
            <h2>${precio}</h2>
            {productos 
            ?
            (
                <button type= "button"
                onClick={ ()=> seleccionarProducto(id)}
                >Comprar</button>
            )
            :
            (
                <button type= "button"
                onClick={ ()=> eliminarProducto(id)}
                >Eliminar</button>
            )
            }
        </div>
    );
}
 
export default Producto;