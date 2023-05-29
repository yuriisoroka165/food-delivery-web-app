const express = require("express");
const router = express.Router();

const { productsController } = require("../../controllers");
const { productModel } = require("../../models");
const { validateData, checkBody, isValidId, authenticate } = require("../../middlewares");

const { schemas } = productModel;

router.get("/", authenticate, productsController.getProducts);
router.get("/:productId", authenticate, isValidId, productsController.getProduct);
router.post("/", authenticate, checkBody, validateData(schemas.requiredFieldsSchema), productsController.addProduct);
router.delete("/:productId", authenticate, isValidId, productsController.deleteProduct);
router.put(
    "/:productId",
    authenticate,
    isValidId,
    checkBody,
    validateData(schemas.requiredFieldsSchema),
    productsController.updateProduct
);


module.exports = router;
