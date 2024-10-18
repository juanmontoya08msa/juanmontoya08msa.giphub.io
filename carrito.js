let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para cargar el carrito en la página
function cargarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    listaCarrito.innerHTML = '';  // Limpiar la lista

    let total = 0;
    carrito.forEach((producto, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${producto.nombre} - $${producto.precio}
            <button onclick="eliminarProducto(${index})">Eliminar</button>
        `;
        listaCarrito.appendChild(li);
        total += producto.precio;
    });

    totalCarrito.textContent = total.toFixed(2);  // Mostrar el total
}

// Función para eliminar productos del carrito
function eliminarProducto(index) {
    carrito.splice(index, 1);  // Eliminar el producto
    localStorage.setItem('carrito', JSON.stringify(carrito));  // Actualizar localStorage
    cargarCarrito();  // Volver a cargar el carrito
}

// Cargar el carrito al abrir la página
cargarCarrito();
