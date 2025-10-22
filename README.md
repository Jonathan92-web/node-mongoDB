# API con MongoDB

Esta es una API simple construida con Node.js, Express y Mongoose. Provee endpoints para gestionar productos, ventas y suscripciones de clientes.

## Instalación

1.  Clona el repositorio:
    ```
    git clone https://github.com/Jonathan-CR/backend-suscripciones.git
    ```
2.  Instala las dependencias:
    ```
    npm install
    ```
3.  Crea un archivo `.env` en el directorio raíz y añade la siguiente variable de entorno:
    ```
    DB_URL=<tu-url-de-mongodb>
    ```

## Uso

Para iniciar el servidor, ejecuta el siguiente comando:

```
npm start
```

El servidor se iniciará en el puerto 3000.

## Endpoints de la API

### Productos

*   `POST /products`: Crea un nuevo producto.
*   `GET /products`: Obtiene una lista de todos los productos.

### Ventas

*   `POST /sales`: Crea una nueva venta.
*   `GET /sales`: Obtiene una lista de todas las ventas.

### Clientes

*   `POST /customers/suscription`: Crea una nueva suscripción de cliente.
*   `GET /customers/obtenerclientes`: Obtiene una lista de todas las suscripciones de clientes.
