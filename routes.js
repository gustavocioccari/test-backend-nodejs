const express = require('express');

const routes = express.Router();

const ProductController = require('./Controllers/ProductController');
const CategoryController = require('./Controllers/CategoryController');

routes.post("/product", ProductController.create);
routes.get("/product", ProductController.get);
routes.put("/product/:id", ProductController.update);
routes.delete("/product/:id", ProductController.delete);

routes.post("/category", CategoryController.create);

module.exports = routes;