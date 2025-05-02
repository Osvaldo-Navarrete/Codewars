// Carrito de compras básico en JavaScript

const carrito = [];

// Función para agregar productos
function agregarProducto(id, nombre, precio, cantidad = 1) {
    const productoExistente = carrito.find(item => item.id === id);
    
    if (productoExistente) {
        productoExistente.cantidad += cantidad;
    } else {
        carrito.push({ id, nombre, precio, cantidad });
    }
}

// Función para quitar productos
function quitarProducto(id) {
    const index = carrito.findIndex(item => item.id === id);
    if (index !== -1) {
        carrito.splice(index, 1);
    }
}

// Función para actualizar cantidad
function actualizarCantidad(id, cantidad) {
    const producto = carrito.find(item => item.id === id);
    if (producto) {
        producto.cantidad = cantidad;
    }
}

// Función para calcular el total
function calcularTotal() {
    return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
}

// Función para mostrar el carrito
function mostrarCarrito() {
    console.log("Carrito de compras:");
    carrito.forEach(item => {
        console.log(`${item.nombre} - ${item.cantidad} x $${item.precio} = $${item.precio * item.cantidad}`);
    });
    console.log(`Total: $${calcularTotal()}`);
}

// Ejemplo de uso
agregarProducto(1, "Filtro de aire", 20, 2);
agregarProducto(2, "Bujía", 5, 4);
mostrarCarrito();

quitarProducto(2);
mostrarCarrito();

actualizarCantidad(1, 3);
mostrarCarrito();

// ¿Te gustaría que lo conectemos con una interfaz simple o seguimos puliendo la lógica? 🚀
