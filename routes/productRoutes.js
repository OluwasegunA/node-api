const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");
const joiSchemaValidation = require("../middleware/joiSchemaValidation");
const productSchema = require("../apiSchema/productSchema");
const tokenValidation = require('../middleware/tokenValidation');

router.post('/', 
tokenValidation.validateToken,
joiSchemaValidation.validateBody(productSchema.createProductSchema), 
productController.createProduct);

router.get('/:id', 
tokenValidation.validateToken,
productController.getProductById);

router.put('/:id', 
tokenValidation.validateToken,
joiSchemaValidation.validateBody(productSchema.updateProductSchema),
productController.updateProductById);

router.get('/',
tokenValidation.validateToken, 
joiSchemaValidation.validateQueryParams(productSchema.getAllproductSchema),
productController.getAllProduct); 

router.delete('/:id', 
tokenValidation.validateToken,
productController.deleteProductById);

module.exports = router;