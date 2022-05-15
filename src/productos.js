import bajo from './bajo.jpg';
import guitarra from './guitarra.jpg';
import bateria from './bateria.jpg';
import bateriapearl from './bateriapearl.jpg'
import guitarrastrato from './guitarstrato.jpg';
import bajofaim from './bajofaim.jpg'

export const products = [
    {
        id: 25,
        name: 'Guitarra Fender',
        price: '100',
        image: guitarra,
        stock:'30',
        description:'Esta es una guitarra cara',
        category:'guitarra'

    },
    {
        id: 29,
        name: 'Guitarra Stratocaster',
        price: '180',
        image: guitarrastrato,
        stock:'40',
        description:'Esta es una guitarra cara Stratocaster',
        category:'guitarra'

    },
    {
        id: 34,
        name: 'Bateria MAPEX',
        price: '200',
        image: bateria,
        stock:'20',
        description:'Esta es una bateria cara',
        category:'bateria'

    },
    {
        id: 44,
        name: 'Bateria Pearl',
        price: '245',
        image: bateriapearl,
        stock:'45',
        description:'Esta es una bateria Pearl',
        category:'bateria'

    },
    {
        id: 55,
        name: 'Bajo FAIM',
        price: '300',
        image: bajofaim,
        stock:'10',
        description:'Esta es un bajo caro',
        category:'bajo'

    },
    {
        id: 78,
        name: 'Bajo FENDER',
        price: '567',
        image: bajo,
        stock:'22',
        description:'Esta es un bajo caro FENDER',
        category:'bajo'

    }

];

export const traerProductos = (cat) => {
    return new Promise((resolve, reject) => {
        const productosFiltrados = products.filter(
            (prod) => prod.category === cat
        );
        setTimeout(() => {
            if (cat === undefined) {
                resolve(products);
            } else {
                resolve(productosFiltrados);
            }
        }, 1000);
    });
};

/*
export const traerProducto = (item) => {
    return new Promise((resolve, reject) => {
        const itemFiltrados = products.filter(
            (prod) => prod.id === item
        );
        setTimeout(() => {
            if (item === undefined) {
                resolve(item);
            } else {
                resolve(itemFiltrados);
            }
        }, 1000);
    });
};*/