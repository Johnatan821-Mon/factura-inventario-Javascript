// =====================================
// SISTEMA DE INVENTARIO DE PRODUCTOS
// =====================================

// ---------- DATOS INICIALES ----------
let productos = [ // Lista de productos con nombre, precio y cantidad
    {nombre: "Teclado", precio: 2000, cantidad: 10},
    {nombre: "Mouse", precio: 2500, cantidad: 5},
    {nombre: "Laptop", precio: 3000000, cantidad: 12},
    {nombre: "Monitor", precio: 1500000, cantidad: 4},
    {nombre: "Parlantes", precio: 500000, cantidad: 3}
];

// ---------- FUNCIONES PRINCIPALES ----------

/**
 * Muestra el inventario actual de productos en consola.
 * Recorre la lista y muestra cada producto.
 */
function mostrarInventario() {
    console.log("=== Inventario ===");
    productos.forEach(item => {
        console.log(`${item.nombre} - Precio: $${item.precio} - Stock: ${item.cantidad}`);
    });
}

/**
 * Registra un nuevo producto en el inventario.
 * Solicita datos al usuario y agrega el producto.
 */
function registrarProducto() {
    let nombre = prompt("Ingrese el nombre del producto:"); // Pide nombre
    let precio = parseFloat(prompt("Ingrese el precio del producto:")); // Pide precio
    let cantidad = parseInt(prompt("Ingrese la cantidad del producto:")); // Pide cantidad

    if (nombre && !isNaN(precio) && !isNaN(cantidad)) { // Verifica datos válidos
        productos.push({nombre, precio, cantidad}); // Agrega producto
        console.log("Producto registrado exitosamente.");
    } else {
        console.log("Error al registrar el producto. Verifique los datos ingresados.");
    }
}

/**
 * Actualiza el precio y la cantidad de un producto existente.
 * Busca el producto y modifica sus datos.
 */
function actualizarProducto() {
    let nombre = prompt("Ingrese el nombre del producto a actualizar:");
    let encontrado = false;
    for (let i = 0; i < productos.length; i++) {    
        if (productos[i].nombre.toLowerCase() === nombre.toLowerCase()) { // Busca producto
            encontrado = true;
            let nuevoPrecio = parseFloat(prompt("Ingrese el nuevo precio del producto:"));
            let nuevaCantidad = parseInt(prompt("Ingrese la nueva cantidad del producto:"));
            if (!isNaN(nuevoPrecio) && !isNaN(nuevaCantidad)) { // Verifica datos
                productos[i].precio = nuevoPrecio; // Actualiza precio
                productos[i].cantidad = nuevaCantidad; // Actualiza cantidad
                console.log("Producto actualizado exitosamente.");
            } else {
                console.log("Datos inválidos. Actualización fallida.");
            }
            break;
        }
    }
    if (!encontrado) {
        console.log("Producto no encontrado.");
    }
}

/**
 * Elimina un producto del inventario por nombre.
 * Busca y elimina el producto.
 */
function eliminarProducto() {
    let nombre = prompt("Ingrese el nombre del producto a eliminar:");
    let encontrado = false;
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre.toLowerCase() === nombre.toLowerCase()) { // Busca producto
            encontrado = true;
            productos.splice(i, 1); // Elimina producto
            console.log("Producto eliminado exitosamente.");
            break;
        }
    }
    if (!encontrado) {
        console.log("Producto no encontrado.");
    }
}

/**
 * Busca un producto en el inventario por nombre y muestra sus datos.
 * Muestra información si lo encuentra.
 */
function buscarProducto() {
    let nombre = prompt("Ingrese el nombre del producto a buscar:");
    let encontrado = false;
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre.toLowerCase() === nombre.toLowerCase()) { // Busca producto
            encontrado = true;
            console.log(`Producto encontrado: ${productos[i].nombre} - Precio: $${productos[i].precio} - Stock: ${productos[i].cantidad}`);
            break;
        }
    }
    if (!encontrado) {
        console.log("Producto no encontrado.");
    }
}

/**
 * Aumenta el stock de un producto existente.
 * Suma cantidad al producto indicado.
 */
function aumentarStock() {
    let nombre = prompt("Ingrese el nombre del producto para aumentar el stock:");
    let cantidad = parseInt(prompt("Ingrese la cantidad a aumentar:"));
    let encontrado = false;
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre.toLowerCase() === nombre.toLowerCase()) { // Busca producto
            encontrado = true;
            if (!isNaN(cantidad) && cantidad > 0) { // Verifica cantidad
                productos[i].cantidad += cantidad; // Suma cantidad
                console.log("Stock aumentado exitosamente.");
            } else {
                console.log("Cantidad inválida.");
            }
            break;
        }
    }
    if (!encontrado) {
        console.log("Producto no encontrado.");
    }
}

/**
 * Disminuye el stock de un producto existente.
 * Resta cantidad al producto indicado.
 */
function disminuirStock() {
    let nombre = prompt("Ingrese el nombre del producto para disminuir el stock:");
    let cantidad = parseInt(prompt("Ingrese la cantidad a disminuir:"));
    let encontrado = false;
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre.toLowerCase() === nombre.toLowerCase()) { // Busca producto
            encontrado = true;
            if (!isNaN(cantidad) && cantidad > 0 && productos[i].cantidad >= cantidad) { // Verifica cantidad y stock
                productos[i].cantidad -= cantidad; // Resta cantidad
                console.log("Stock disminuido exitosamente.");
            } else {
                console.log("Cantidad inválida o stock insuficiente.");
            }
            break;
        }
    }
    if (!encontrado) {
        console.log("Producto no encontrado.");
    }
}

// ---------- MENÚ PRINCIPAL DEL SISTEMA ----------

/**
 * Muestra el menú principal y ejecuta la opción seleccionada por el usuario.
 * Permite elegir y ejecutar acciones del inventario.
 */
function menuPrincipal() {
    alert("=== Menú Principal ===");
    alert("1. Mostrar Inventario\n2. Registrar Producto\n3. Actualizar Producto\n4. Eliminar Producto\n5. Buscar Producto\n6. Aumentar Stock\n7. Disminuir Stock\n8. Salir");
    let opcion = parseInt(prompt("Seleccione una opción:")); // Pide opción
    switch (opcion) {
        case 1:
            mostrarInventario(); // Muestra inventario
            break;
        case 2:
            registrarProducto(); // Registra producto
            mostrarInventario();
            break;
        case 3:
            actualizarProducto(); // Actualiza producto
            mostrarInventario();
            break;
        case 4:
            eliminarProducto(); // Elimina producto
            mostrarInventario();
            break;
        case 5:
            buscarProducto(); // Busca producto
            break;
        case 6:
            aumentarStock(); // Aumenta stock
            mostrarInventario();
            break;
        case 7:
            disminuirStock(); // Disminuye stock
            mostrarInventario();
            break;
        case 8:
            alert("Saliendo del sistema."); // Sale del sistema
            break;
        default:
            alert("Opción inválida."); // Opción incorrecta
    }
}

// ---------- INICIO DEL PROGRAMA ----------
menuPrincipal(); // Ejecuta el menú principal