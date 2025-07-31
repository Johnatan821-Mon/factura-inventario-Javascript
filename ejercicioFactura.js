let cliente;
let direccion;
let celular;
let email;
let totalCompra;
let detalleCompra = [];

let productos = [
    {nombre: "Teclado", precio: 2000, cantidad: 10},
    {nombre: "Mouse", precio: 2500, cantidad: 5},
    {nombre: "Laptop", precio: 3000000, cantidad: 1},
    {nombre: "Monitor", precio: 1500000, cantidad: 2},
    {nombre: "Parlantes", precio: 500000, cantidad: 3}
];

function registrarCliente() {
    cliente = prompt("Ingrese el nombre del cliente:");
    direccion = prompt("Ingrese la dirección del cliente:");
    celular = prompt("Ingrese el teléfono del cliente:");
    email = prompt("Ingrese el email del cliente:");
}

function calcularTotalCompra() {
    totalCompra = 0;
    detalleCompra = [];
    let continuar = true;
    while (continuar) {
        let producto = prompt("Ingrese el nombre del producto a comprar (o 'salir' para finalizar):");
        if (producto === null || producto.toLowerCase() === 'salir') {
            continuar = false;
            break;
        }
        
        let cantidad = parseInt(prompt("Ingrese la cantidad de " + producto + ":"));
        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Cantidad inválida.");
            continue;
        }
        let encontrado = false;

        for (let i = 0; i < productos.length; i++) {
            if (productos[i].nombre.toLowerCase() === producto.toLowerCase()) {
                encontrado = true;
                if (productos[i].cantidad >= cantidad) {
                    productos[i].cantidad -= cantidad;
                    let subtotal = productos[i].precio * cantidad;
                    totalCompra += subtotal;
                    detalleCompra.push({producto: productos[i].nombre, cantidad: cantidad, subtotal: subtotal});
                } else {
                    alert("No hay suficiente stock de " + productos[i].nombre);
                }
                break;
            }
        }

        if (!encontrado) {
            alert("Producto no encontrado.");
        }
    }
}

function mostrarFactura() {
    console.log("=== Factura de Compra ===");
    console.log("Cliente: " + cliente);
    console.log("Dirección: " + direccion);
    console.log("Celular: " + celular);
    console.log("Email: " + email);
    console.log("Detalle de Compra:");
    detalleCompra.forEach(item => {
        console.log(`${item.cantidad} x ${item.producto} a $${item.precio} = $${item.subtotal}`);
    });
    console.log("Total a Pagar: $" + totalCompra);
}

function iniciar() {
    registrarCliente();
    calcularTotalCompra();
    mostrarFactura();
}

iniciar();