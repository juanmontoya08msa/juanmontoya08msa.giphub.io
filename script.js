

document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-items > li > a');

    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const parentLi = this.parentElement;
            if (parentLi.classList.contains('active')) {
                parentLi.classList.remove('active');
            } else {
                document.querySelectorAll('.menu-items > li').forEach(li => li.classList.remove('active'));
                parentLi.classList.add('active');
            }
            e.preventDefault();
        });
    });
});

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 15,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
})


/*carrusel*/

function App() {}

    window.onload = function(event) {
        var app = new App();
        window.app = app;
    }

    App.prototype.processingButton = function(event) {

        const btn = event.currentTarget;
        const carruselList = event.currentTarget.parentNode;
        const track = event.currentTarget.parentNode.querySelector('#track');
        const carrusel = track.querySelectorAll('.carrusel');

        const carruselWidth = carrusel[0].offsetWidth;

        const trackWidth = track.offsetWidth;
        const listWidth = carruselList.offsetWidth;

        track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0,-2) * -1);
        btn.dataset.button == "button-prev" ? prevAction(leftPosition,carruselWidth, track) : nexAction(leftPosition,trackWidth, listWidth, carruselWidth, track)

    }

    let prevAction = (leftPosition, carruselWidth, track) => {
        if (leftPosition > 0) {
            track.style.left = `${-1 * (leftPosition - carruselWidth)}px`;
        }

    }

    let nexAction = (leftPosition, trackWidth, listWidth, carruselWidth, track) => {

        if (leftPosition < (trackWidth - listWidth)) {
            track.style.left = `${-1 * (leftPosition + carruselWidth)}px`;
        }

    }

/*modal*/





/*modal*/

















    /*carrito*/

// Inicializar el carrito desde localStorage
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para agregar productos al carrito
function agregarProducto(id, nombre, precio, imagen) {
    const producto = { id, nombre, precio, imagen };

    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.id === id);
    if (productoExistente) {
        alert('Este producto ya está en el carrito');
    } else {
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarNumeroCarrito();
    }
}

// Función para actualizar el número en el icono del carrito
function actualizarNumeroCarrito() {
    const numeroCarrito = document.querySelectorAll('.icono-carrito .number');
    const totalProductos = carrito.length;

    numeroCarrito.forEach(item => {
        item.textContent = `(${totalProductos})`;
    });
}

// Evento para agregar productos al carrito
document.querySelectorAll('.agregar-carrito').forEach(boton => {
    boton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevenir que el enlace recargue la página

        const id = e.target.dataset.id;
        const nombre = e.target.closest('.product-txt').querySelector('h3').textContent;
        const precioTexto = e.target.closest('.product-txt').querySelector('.precio').textContent;
        const precio = parseFloat(precioTexto.replace('$', '').replace('.', '').replace(',', '.'));
        const imagen = e.target.closest('.ofert-1').querySelector('img').src;

        agregarProducto(id, nombre, precio, imagen);
    });
});

// Actualizar el número de productos en el carrito al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarNumeroCarrito();
});