# Sitio web NALESSA

Catálogo digital de perfumería, skincare, calzado y opciones para emprendedores.

## Publicación

1. Sube **todo el contenido de esta carpeta** a la raíz del repositorio, incluyendo `index.html`, `productos.js`, `panel-estrategico.html` y la carpeta `imagenes`.
2. Abre **Settings → Pages**.
3. En **Source**, selecciona **Deploy from a branch**.
4. Selecciona la rama `main`, la carpeta `/ (root)` y guarda.

## Editar productos, precios e imágenes

Abre `productos.js` y modifica los datos de cada producto:

- `name`: nombre.
- `brand`: marca.
- `category`: categoría.
- `price`: precio sin símbolo de moneda.
- `image`: enlace o ruta de la fotografía.
- `description`: descripción corta.
- `details`: información adicional.

Para utilizar una fotografía propia:

1. Sube la fotografía a la carpeta `imagenes`.
2. Usa un nombre sin espacios ni tildes, por ejemplo `coach-blue.jpg`.
3. En `productos.js`, escribe `image: "imagenes/coach-blue.jpg"`.

No borres comas, llaves o comillas del bloque de productos.

## WhatsApp

Los pedidos se envían al número `+504 8858-9904`. En el código se utiliza el formato internacional `50488589904`.

## Blog

Los enlaces **Blog** del menú y del pie de página abren `https://nicolemusa.blogspot.com/` en una pestaña nueva.

## Gestión del pedido

El flujo registra la información de entrega, valida el formato de la tarjeta y genera un resumen con número de pedido. Los campos financieros se limpian automáticamente al finalizar.

## Identidad visual

La paleta principal está definida al inicio de `index.html`: marfil, taupe, café grisáceo y carbón cálido. El monograma del encabezado está integrado directamente en `index.html` para que nunca dependa de una imagen externa. También se conserva una copia editable en `imagenes/logo-nalessa.svg`.

## Panel de estrategia y resultados

Abre `panel-estrategico.html` para presentar:

- Análisis de mercado.
- Estrategia SEO, redes sociales, email, WhatsApp y publicidad.
- Integraciones digitales.
- Métricas registradas localmente.
- Calculadora de proyecciones mensuales.
- Plan de contenido.
