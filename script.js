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
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    carrito.push(productos[index]);

    localStorage.setItem('carrito', JSON.stringify(carrito));

    let carritoLista = document.getElementById('carrito-lista');
    carritoLista.innerHTML = '';

    // Se agrega al carrito
    for (let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];
        let li = document.createElement('li');
        li.innerHTML =
            ` ${producto.nombre} - €${producto.precio} 
            <br><button class="boton-eliminar" onclick="eliminarProductoCarrito(${i})">Eliminar</button>`;
        carritoLista.appendChild(li);
    }
}

/**
 * Función para eliminar un producto del carrito
 */
function eliminarProductoCarrito(index) {
    // Aqui debes coger el index(indice) y eliminar ese
    // indice del array y del html, el indice va de 0 a 6 (mira html)

    // El boton ya tiene como parametro el numero de
    // indice de cada producto, solo haz que se elimine

    // Hacer que el carrito sea responsive, que no ocupe toda la pantalla en movil
}

/**
 * Función para actualizar el
 * carrito y mostrar productos neuvos
 */
function actualizarCarrito() {
    // Igual tienes que cambiar algo de agregarAlCarrito
    // para usar este metodo para que se muestre en el carrito

    // hacer que en localStorage se elimine y guarde bien los productos
}

/**
 * Aqui se carga
 * todo del localStorage
 */
function onload() {
    
}