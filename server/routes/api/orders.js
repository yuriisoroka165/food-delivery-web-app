const express = require("express");
const router = express.Router();

const { ordersController } = require("../../controllers");
// const { orderModel } = require("../../models");
const { checkBody, isValidId, authenticate } = require("../../middlewares");

router.get("/", authenticate, ordersController.getOrders);
router.get("/:orderId", authenticate, isValidId, ordersController.getOrder);
router.post("/", authenticate, checkBody, ordersController.addOrder);
router.delete("/:orderId", authenticate, isValidId, ordersController.deleteOrder);

module.exports = router;
