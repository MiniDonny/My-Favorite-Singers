/*LIST CARDS*/
const listadoCartas = [
    {
        id: 1,
        nombre: "Post Malone",
        imagen: "./imagenes/post-malone.jpg",
        descripcion: "TOP 1: Represents me 'Lemon Tree' ",
    },
    {
        id: 2,
        nombre: "Lil Peep",
        imagen: "./imagenes/lil-peep.jpg",
        descripcion: "TOP 2: I love the medolia of 'Star Shopping' ",
    },
    {
        id: 3,
        nombre: "Juice World",
        imagen: "./imagenes/juice-world.webp",
        descripcion: "TOP 3: I can not stop listening 'Dreams' ",
    },
    {
        id: 4,
        nombre: "Billie Eilish",
        imagen: "./imagenes/billie-eilish.webp",
        descripcion: "TOP 4: I always listen 'All the god girls go to hell' ",
    },
    {
        id: 5,
        nombre: "Joji",
        imagen: "./imagenes/joji.webp",
        descripcion: "TOP 5: I cry when i hear 'Glimpse of us' ",
    },
]
/* Selección de los NODOS HTML (etiquetas/elementos html)*/
const contenedorCartas = document.querySelector(".listadoCartas")
/* Función que recorre el listado de las cartas */
listadoCartas.forEach(
    (carta) => contenedorCartas.innerHTML += `
    <article class="card">
        <img src=${carta.imagen} alt="Imagen del proyecto">
        <div class="info">
            <h2>${carta.nombre}</h2>
            <p>${carta.descripcion}</p>
        </div>
    </article>`
)



