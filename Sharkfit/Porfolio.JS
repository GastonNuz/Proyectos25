// Variables globales para el carrito y el total
let carrito = [];
let total = 0;

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
    actualizarTotal();
}

// Función para actualizar la lista de productos en el carrito
function actualizarCarrito() {
    const listaCarrito = document.getElementById("lista-carrito");
    listaCarrito.innerHTML = "";
    carrito.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        listaCarrito.appendChild(li);
    });
}

// Función para actualizar el total
function actualizarTotal() {
    const totalCarrito = document.getElementById("total-carrito");
    totalCarrito.textContent = total.toFixed(2);
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    total = 0;
    actualizarCarrito();
    actualizarTotal();
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    const botonesAgregar = document.querySelectorAll(".agregar-carrito");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", () => {
            const producto = boton.parentElement;
            const nombre = producto.querySelector("h2").textContent;
            const precio = parseFloat(producto.querySelector("p").textContent.replace("Precio: $", ""));
            agregarAlCarrito(nombre, precio);
        });
    });

    document.getElementById("vaciar-carrito").addEventListener("click", vaciarCarrito);
});
