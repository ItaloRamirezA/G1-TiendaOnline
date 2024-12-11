//Lista de productos que son objetos
const productos = [
    {nombre: "Peluche de Araña", precio: 30.00},
    {nombre: "Peluche de Aveja", precio: 30.00},
    {nombre: "Peluche de Creeper", precio: 30.00},
    {nombre: "Peluche de Gato", precio: 30.00},
    {nombre: "Peluche de Oveja", precio: 30.00},
    {nombre: "Peluche de Piglin", precio: 30.00},
    {nombre: "Peluche de Cerdo", precio: 30.00}
];

// Variable para el carrito de compras
let carrito = [];

/**
 * Función para agregar productos al carrito
 */
function agregarAlCarrito(index) {
    carrito.push(productos[index]);

    // TODO
}  

/**
 * Función para eliminar un producto del carrito
 */
function eliminarProductoCarrito() {
    carrito.splice(index, 1);
    actualizarCarrito();
}

/**
 * Función para actualizar el
 * carrito y mostrar productos neuvos
 */
function actualizarCarrito() {

}