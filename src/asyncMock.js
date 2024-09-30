const products = [
    {
        id: 1,
        name: "Gorra trucker",
        price: 6000,
        category: "Estampados",
        img: "/img/1.png",
        description: "Esta gorra trucker es el complemento perfecto para cualquier outfit. Con un diseño moderno y una malla trasera que permite la ventilación, es ideal para actividades al aire libre o simplemente para lucir un estilo casual."
    },
    {
        id: 2,
        name: "Remera",
        price: 7800,
        category: "Estampados",
        img: "/img/2.png",
        description: "Transforma tu estilo con nuestra remera personalizada estampada con vinilo. Confeccionada en algodón suave y resistente, esta prenda es perfecta para el uso diario, brindando comodidad y originalidad en cada movimiento."
    },
    {
        id: 3,
        name: "Stickers",
        price: 600,
        category: "Stickers",
        img: "/img/3.png",
        description: "Dale un toque único a tus pertenencias con nuestro sticker de alta calidad. Resistente al agua y al sol, es ideal para personalizar laptops, botellas, o cualquier superficie que desees."
    },
    {
        id: 4,
        name: "Stickers personalizados",
        price: 900,
        category: "Stickers",
        img: "/img/4.png",
        description: "Crea tus propios stickers personalizados que reflejen tu estilo. Perfectos para regalos o para adornar tus objetos favoritos, estos stickers son fáciles de aplicar y de quitar sin dejar residuos."
    },
    {
        id: 5,
        name: "Tarjetas personales",
        price: 15000,
        category: "Papeleria",
        img: "/img/5.png",
        description: "Haz una impresión duradera con nuestras tarjetas personales de diseño elegante. Con una variedad de opciones de personalización, asegúrate de que tu presentación sea tan única como tú."
    },
    {
        id: 6,
        name: "Estampitas de Comunion",
        price: 9500,
        category: "Papeleria",
        img: "/img/6.png",
        description: "Celebra un momento especial con nuestras invitaciones de comunión personalizadas. Diseñadas para reflejar la esencia de tu celebración, estas tarjetas son un recuerdo inolvidable para tus invitados."
    },
    {
        id: 7,
        name: "Cuadro Jirafa",
        price: 26000,
        category: "cuadro",
        img: "/img/7.png",
        description: "Agrega un toque de elegancia salvaje a tu hogar con este hermoso cuadro de jirafa. Perfecto para los amantes de la naturaleza y el arte contemporáneo."
    },
    {
        id: 8,
        name: "Cuadro Messi",
        price: 9500,
        category: "cuadro",
        img: "/img/8.png",
        description: "Celebra al mejor jugador de fútbol con este cuadro de Messi. Ideal para los fanáticos del deporte rey, una pieza imprescindible para cualquier colección."
    },
    {
        id: 9,
        name: "Taza Sublimada",
        price: 9500,
        category: "estampados",
        img: "/img/9.png",
        description: "Disfruta tu bebida favorita con estilo en esta taza sublimada. Personalizable y perfecta para regalar o darte un gusto especial."
    }
    
];

const objets = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
}

const objetId = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 1000);
    });
}

export default objets; 
export { objetId };
