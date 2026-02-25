const productos = [

  {
id: 1, 
nombre: "Laptop", 
precio: 12000 },
  {
id: 2, 
nombre: "Mouse", 
precio: 300 },
  {
id: 3, 
nombre: "Teclado", 
precio: 800 }
];


console.log('Voy a recorrer mi array')

productos.forEach((producto) => {
    console.log(producto.nombre);
    console.log(producto.precio);
});

console.table(productos)


let total = productos.length;

let mensaje = `El total de productos es: ${total}`;
let n = document.querySelector('#mensaje');
setTimeout(() => {
    n.textContent = mensaje ;
}, 2000);