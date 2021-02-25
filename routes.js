const express = require('express');

const routes = express.Router();

const ProductController = require('./Controllers/ProductController');
const CategoryController = require('./Controllers/CategoryController');

routes.post("/product", ProductController.create);
routes.get("/product", ProductController.get);
routes.patch("/product/:id", ProductController.update);
routes.delete("/product/:id", ProductController.delete);

routes.post("/category", CategoryController.create);
routes.get("/category", CategoryController.get);

module.exports = routes;