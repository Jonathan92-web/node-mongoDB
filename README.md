# Mongo DB API

This is a simple API built with Node.js, Express, and Mongoose. It provides endpoints for managing products, sales, and customer subscriptions.

## Installation

1.  Clone the repository:
    ```
    git clone https://github.com/Jonathan-CR/backend-suscripciones.git
    ```
2.  Install the dependencies:
    ```
    npm install
    ```
3.  Create a `.env` file in the root directory and add the following environment variables:
    ```
    DB_URL=<your-mongodb-url>
    ```

## Usage

To start the server, run the following command:

```
npm start
```

The server will start on port 3000.

## API Endpoints

### Products

*   `POST /products`: Create a new product.
*   `GET /products`: Get a list of all products.

### Sales

*   `POST /sales`: Create a new sale.
*   `GET /sales`: Get a list of all sales.

### Customers

*   `POST /customers/suscription`: Create a new customer subscription.
*   `GET /customers/obtenerclientes`: Get a list of all customer subscriptions.
