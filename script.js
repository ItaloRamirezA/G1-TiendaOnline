
//cantidad toatal de diel-precio-total-en-el-carritonro en el carrito
let total=0
// Lista de productos que son objetos

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
        total=total+producto.precio
        let li = document.createElement('li');
        li.innerHTML =
            ` ${producto.nombre} - €${producto.precio} 
            <br><button class="boton-eliminar" onclick="eliminarProductoCarrito(${i})">Eliminar</button>`;
        carritoLista.appendChild(li);
    }
    actualizarCarrito()
}

/**
 * Función para eliminar un producto del carrito
 */
function eliminarProductoCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
}

/**
 * Función para actualizar el carrito en el HTML
 */
function actualizarCarrito() {
    //limpiar el carrito para volver a rellenarlo
    total=0   
    localStorage.removeItem("total")
     let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let carritoLista = document.getElementById('carrito-lista');
    carritoLista.innerHTML = '';
    carrito.forEach((producto, index) => {
        total=total+producto.precio
        let li = document.createElement('li');
        li.innerHTML = `
            ${producto.nombre} - €${producto.precio}
            <br><button class="boton-eliminar" onclick="eliminarProductoCarrito(${index})">Eliminar</button>
        `;
        carritoLista.appendChild(li);
    });

    document.getElementById("total").innerHTML=total+" €"
    localStorage.setItem("total",total)  
}

/**
 * Función para manejar el botón toggle del carrito
 */
document.querySelector('.boton-toggle-carrito').addEventListener('click', () => {
    const carrito = document.querySelector('.carrito');
    carrito.classList.toggle('oculto');
});

/**
 * Cargar carrito al cargar la página
 */
window.onload = function () {
    actualizarCarrito();
};
