/*
 * CATÁLOGO EDITABLE NALESSA
 *
 * Para cambiar un producto, edita únicamente los textos entre comillas,
 * el precio (sin L ni comas) o la ruta de la imagen.
 * Ejemplo local: image: "imagenes/coach-blue.jpg"
 */

window.NALESSA_PRODUCTS = [
    {
        id: 1,
        name: "Coach Blue Eau de Toilette",
        brand: "Coach New York",
        category: "perfumes",
        price: 1550,
        badge: "Más Vendido",
        rating: 5,
        image: "imagenes/coach-blue.jpg",
        description: "Fragancia aromática fresca con notas de lima, pimienta negra, ozono y madera de cedro.",
        details: "Presentación de 100 ml en spray. Caja sellada y disponibilidad sujeta a confirmación."
    },
    {
        id: 2,
        name: "Hugo Boss Selection EDT",
        brand: "Hugo Boss",
        category: "perfumes",
        price: 1500,
        badge: "Original 100 ml",
        rating: 5,
        image: "imagenes/boss-select.jpg",
        description: "Elegancia masculina con notas de toronja, hojas de cedro, geranio y pimienta rosa.",
        details: "Presentación de 100 ml. Ideal para ocasiones formales y uso diario."
    },
    {
        id: 3,
        name: "Stilettos Confort Borgoña Vizzano",
        brand: "Vizzano Brasil",
        category: "calzado",
        price: 1250,
        badge: "Calzado Brasil",
        rating: 5,
        image: "imagenes/stil-confort.jpg",
        description: "Tacón fino clásico en tono borgoña con plantilla acolchada de Vizzano.",
        details: "Tallas 35 a 38 BR. Material sintético de alta durabilidad con acabado mate."
    },
    {
        id: 4,
        name: "Sandalias de Tacón Bajo Negro Vizzano",
        brand: "Vizzano Brasil",
        category: "calzado",
        price: 1100,
        badge: "Confort Diario",
        rating: 4.8,
        image: "imagenes/sanda-negro.jpg",
        description: "Diseño elegante de tiras finas con hebillas metálicas y tacón de bloque.",
        details: "Tacón de 5 cm y suela antideslizante. Consulta las tallas disponibles."
    },
    {
        id: 5,
        name: "Neutrogena Hydro Boost Water Gel",
        brand: "Neutrogena",
        category: "skincare",
        price: 650,
        badge: "Hidratación",
        rating: 5,
        image: "imagenes/hydro-boost.jpg",
        description: "Gel hidratante facial enriquecido con ácido hialurónico, ligero y de rápida absorción.",
        details: "Frasco de 50 g. Recomendado para complementar la rutina de hidratación."
    },
    {
        id: 6,
        name: "The Ordinary Niacinamide 10% + Zinc",
        brand: "The Ordinary",
        category: "skincare",
        price: 480,
        badge: "Sérum Facial",
        rating: 4.9,
        image: "imagenes/the-ordy.jpg",
        description: "Sérum de niacinamida y zinc para complementar rutinas de piel con tendencia grasa.",
        details: "Gotero de 30 ml. Realiza una prueba de parche antes de incorporarlo a tu rutina."
    },
    {
        id: 7,
        name: "CK Be Unisex Eau de Toilette",
        brand: "Calvin Klein",
        category: "perfumes",
        price: 1100,
        badge: "Aroma Unisex",
        rating: 4.7,
        image: "imagenes/ck-be.jpg",
        description: "Fragancia cálida y fresca con lavanda, menta verde, sándalo y durazno suave.",
        details: "Presentación de 100 ml en frasco negro mate."
    },
    {
        id: 8,
        name: "Plataformas Journee Celeste Pastel",
        brand: "Journee Collection",
        category: "calzado",
        price: 1350,
        badge: "Nueva Tendencia",
        rating: 4.8,
        image: "imagenes/plata-journe.jpg",
        description: "Plataformas tipo cuña en azul celeste pastel con correas acolchadas.",
        details: "Suela de yute tejido y plataforma de 7 cm. Consulta disponibilidad de tallas."
    },
    {
        id: 9,
        name: "Lote Mayorista Vizzano (12 pares)",
        brand: "Vizzano Brasil",
        category: "mayoristas",
        price: 7800,
        badge: "Emprendedores",
        rating: 5,
        image: "https://scontent.fsap15-1.fna.fbcdn.net/v/t1.6435-9/101459858_1512618392229360_5271037268721664000_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGK0ycyp-pGUVkS8aAwEcBwtY78LG7jNuS1jvwsbuM25A6_Se3UfMh-_S59eLqlrwpNcaIa-T_9k9cxriHY__1P&_nc_ohc=2ob7kyHjrNYQ7kNvwHdvhw6&_nc_oc=AdpZ9UCA4SJ-IlNLGg-ahXKX4UcpMlE003_vEQ84uRAptIAxDYnbkKwQGurJu59tzps&_nc_zt=23&_nc_ht=scontent.fsap15-1.fna&_nc_gid=zXfQgrfsAv60nDh3nytDbg&_nc_ss=7b2a8&oh=00_AQHzJgeKBolQTYsa_TmQw4TSMDsAXGAA0VuSyRI5xlgYAg&oe=6A994E76?auto=format&fit=crop&q=80&w=600",
        description: "Lote surtido de 12 pares con una selección de modelos y tallas.",
        details: "La composición del lote se confirma por WhatsApp según inventario disponible."
    },
    {
        id: 10,
        name: "NovAge Anti-Aging Serum Oriflame",
        brand: "Oriflame Sweden",
        category: "skincare",
        price: 890,
        badge: "Cuidado Facial",
        rating: 4.9,
        image: "https://m.media-amazon.com/images/I/41h3HOXWqKL.jpg?auto=format&fit=crop&q=80&w=600",
        description: "Sérum facial concentrado para complementar rutinas de nutrición y cuidado diario.",
        details: "Frasco de 30 ml con dosificador. Sigue las indicaciones del fabricante."
    },
    {
        id: 11,
        name: "Lote Perfumería Importada (6 unidades)",
        brand: "Marcas Surtidas",
        category: "mayoristas",
        price: 6900,
        badge: "Lote Perfumes",
        rating: 5,
        image: "https://m.media-amazon.com/images/I/91Jt55hmD6L._AC_SL1500_.jpg?auto=format&fit=crop&q=80&w=600",
        description: "Selección de seis fragancias para iniciar o ampliar un emprendimiento.",
        details: "Las marcas y presentaciones se confirman antes de formalizar el pedido."
    },
    {
        id: 12,
        name: "Guess Woman Eau de Parfum",
        brand: "Guess",
        category: "perfumes",
        price: 1280,
        badge: "Floral Frutal",
        rating: 4.8,
        image: "https://super-del-corral.myshopify.com/cdn/shop/products/image_1a8775b6-1974-4ad1-ab92-8a9dd2088e8d_1125x.jpg?v=1587751076?auto=format&fit=crop&q=80&w=600",
        description: "Fragancia femenina con notas de manzana verde, peonía, fresia y acordes frutales.",
        details: "Presentación de 75 ml Eau de Parfum."
    }
];
