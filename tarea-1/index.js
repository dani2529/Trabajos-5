// let libros = [
//     { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 300 },
//     { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 400 },
//     { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 350 }
// ];

// console.log(`titulo: ${libros[1].titulo}, autor: ${libros[1].autor}`);

// libros[0].paginas = 350;
// console.log(libros[0]);

// libros[0].paginas =350;
// console.log(libros[0]);

// let librosResumidos = libros.map(libros => ({titulo: libros.titulo, autor: libros.autor}));
// console.log(librosResumidos);



// // 2


// const estudiantes = [
//     { nombre: "Pedro", edad: 29, promedio: 7.9 },
//     { nombre: "Ana", edad: 33, promedio: 8.9 },
//     { nombre: "Pablo", edad: 32, promedio: 9.5 },
//     { nombre: "Juan", edad: 25, promedio: 6.0 },
//     { nombre: "Maria", edad: 28, promedio: 7.3 },
//     { nombre: "Andres", edad: 45, promedio: 8.7 },
// ];

// let sumaEdades = 0;

// for (let i = 0; i < estudiantes.length; i++){
//     sumaEdades += estudiantes[i].edad;
// }

// console.log('la suma de las edades es:', sumaEdades);

// let promedioEdad = sumaEdades / estudiantes.length;

// console.log('el promedio de las edadeses:', promedioEdad.toFixed(2));



// let promedioEdad = sumaEdades / estudiantes.length;

// console.log('la suma de las edades son:', sumaEdades);
// console.log('El promedio de las edades es:', promedioEdad.toFixed(2));


// 3

// let productos = [
//     { nombre: 'Camisa', categoria: 'Ropa', precio: 20 },
//     { nombre: 'Computadora', categoria: 'Electrónica', precio: 800 },
//     { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
//     { nombre: 'Teléfono', categoria: 'Electrónica', precio: 300 }
// ];

// let productosRopa = productos.filter(producto => producto.categoria === 'Ropa');

// console.log("Productos de la categoría Ropa son:", productosRopa);


// let preciosMayores = productos.filter(producto => producto.precio > 30);

// console.log("Productos con precio mayor de 30:", preciosMayores);


// opcional

const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];

let estudianteConMayorPromedio = estudiantes[0];

for (let i = 1; i < estudiantes.length; i++){
    if (estudiantes[i].promedio > estudianteConMayorPromedio.promedio) {
        estudianteConMayorPromedio = estudiantes[i];
    }
}

console.log('El estudiante con el meyor promedio es:', estudianteConMayorPromedio.nombre);