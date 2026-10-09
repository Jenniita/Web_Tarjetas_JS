
//Creamos una cosntante con los productos y los datos que vamos a ponerle a cada producto

const productos = [
{ id: 1, nombre: 'Samsung s21', descripcion: 'Producto disponible para enviar a todo el país con garantía', categoria: 'Móviles', disponibilidad: false, precio: 250 },
{ id: 2, nombre: 'Samsung tab11', descripcion: 'Producto disponible para enviar a todo el país con garantía', categoria: 'Tablet', disponibilidad: true, precio: 240 },
{ id: 3, nombre: 'Samsung tab9+', descripcion: 'Producto disponible para enviar a todo el país con garantía', categoria: 'Tablet', disponibilidad: true, precio: 450 },
{ id: 4, nombre: 'Samsung s22', descripcion: 'Producto disponible para enviar a todo el país con garantía', categoria: 'Móviles', disponibilidad: false, precio: 750 },
{ id: 5, nombre: 'Samsung s23', descripcion: 'Producto disponible para enviar a todo el país con garantía', categoria: 'Móviles', disponibilidad: true, precio: 999 },
{ id: 6, nombre: 'Samsung tab8+', descripcion: 'Producto disponible para enviar a todo el país con garantía', categoria: 'Tablet', disponibilidad: true, precio: 777 },
{ id: 7, nombre: 'Samsung s25', descripcion: 'Producto disponible para enviar a todo el país con garantía', categoria: 'Móviles', disponibilidad: false, precio: 888 },
{ id: 8, nombre: 'Samsung tab12', descripcion: 'Producto disponible para enviar a todo el país con garantía', categoria: 'Tablet', disponibilidad: true, precio: 5214 },
{ id: 9, nombre: 'Samsung s8+', descripcion: 'Producto disponible para enviar a todo el país con garantía', categoria: 'Móviles', disponibilidad: true, precio: 225 },
{ id: 10, nombre: 'Samsung s26', descripcion: 'Producto disponible para enviar a todo el país con garantía', categoria: 'Móviles', disponibilidad: false, precio: 67 },
{ id: 11, nombre: 'Samsung smartwatch 4', descripcion: 'Producto disponible para enviar a todo el país con garantía', categoria: 'Móviles', disponibilidad: true, precio: 75 },
{ id: 12, nombre: 'Samsung tab6', descripcion: 'Producto disponible para enviar a todo el país con garantía', categoria: 'Tablet', disponibilidad: true, precio: 115 },
{ id: 13, nombre: 'Portátil Lenovo IdeaPad', descripcion: 'Portátil con 16 GB de RAM y 512 GB SSD', categoria: 'Ordenador', disponibilidad: true, precio: 699 },
{ id: 14, nombre: 'PC Gaming ASUS', descripcion: 'Ordenador gaming con 16 GB de RAM y tarjeta gráfica dedicada', categoria: 'Ordenador', disponibilidad: true, precio: 1299 },
{ id: 15, nombre: 'Monitor LG 24 pulgadas', descripcion: 'Monitor Full HD de 24 pulgadas', categoria: 'Ordenador', disponibilidad: true, precio: 149 },
{ id: 16, nombre: 'Teclado mecánico Logitech', descripcion: 'Teclado mecánico con conexión USB', categoria: 'Ordenador', disponibilidad: false, precio: 89 },
{ id: 17, nombre: 'Ratón inalámbrico HP', descripcion: 'Ratón inalámbrico con sensor óptico', categoria: 'Ordenador', disponibilidad: true, precio: 25 },
{ id: 18, nombre: 'Disco SSD Samsung 1 TB', descripcion: 'Unidad de almacenamiento SSD de 1 TB', categoria: 'Ordenador', disponibilidad: true, precio: 99 },
]

//Seleccionamos el div contenedor de nuestro HTML que tiene la clase contenedor
const contenedor = document.querySelector('.contenedor');

//Creamos una función que va a pintar todos los productos
function pintar(producto){
    //Limpiar los productos que hay en el contenedor
    contenedor.innerHTML = "";

    //Para cada producto
    producto.forEach(({ id, nombre, descripcion, categoria, disponibilidad, precio }) =>{
        //Creamos un nuevo div, que será la tarjeta para cada producto
        const tarjeta = document.createElement('div')
        //Le añadimos a cada tarjeta la clase 'tarjeta'
        tarjeta.classList.add('tarjeta')
        //Variable para coger el precio con IVA
        let precioIva = precio * 1.21;
        //Pintamos el html con los datos que queremos
        tarjeta.innerHTML = `
            <h3>${nombre}</h3>
            <p>${descripcion}</p>
            <p>${precio} €</p>
            ${disponibilidad ? '<button>Agregar al carrito</button>' : '<p>No disponible</p>'}
            <div class="precioIva">${precioIva}</div>
        `;
        //Para que dentro del contenedor, aparezca la tarjeta
        contenedor.appendChild(tarjeta)
    })   
}

//Ponemos la función en marcha
pintar(productos);

//Ahora para filtrar los productos disponibles de los que no
const filtrados = productos.filter(elemento => elemento.disponibilidad === true)

//Creamos los filtros para ordenar por categorias
const filtradoMoviles = productos.filter(elemento => elemento.categoria == "Móviles")
const filtradoTablets = productos.filter(elemento => elemento.categoria == "Tablet")
const filtradoOrdenadores = productos.filter(elemento => elemento.categoria == "Ordenador")

//Añadimos los botones para el filtrado
document.querySelector(".btnDisponibles").addEventListener("click", ()=>{
    pintar(filtrados)
})
document.querySelector(".btnTodos").addEventListener("click", ()=>{
    pintar(productos)
})

//Constante para los productos con IVA en un arrayList
const productoIva = productos.map(precioIva => precioIva.precio * 1.21)
console.log(productoIva)



