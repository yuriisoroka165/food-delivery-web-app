const { orderModel } = require("../models");
const { HttpError, controllerWrapper } = require("../helpers");

const { Order } = orderModel;

const getOrders = async (request, response, next) => {
    const { _id: customer } = request.user;
    const { page = 1, limit = 10 } = request.query;
    const skip = (page - 1) * limit;
    const query = { customer };
    const result = await Order.find(query, "-createdAt -updatedAt", { skip, limit }).populate("customer", "email");
    if (!result) {
        throw HttpError(404, "Not found");
    }
    response.json(result);
};

const getOrder = async (request, response, next) => {
    const { orderId } = request.params;
    const result = await Order.findById(orderId);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    response.json(result);
};

const addOrder = async (request, response, next) => {
    const { _id: customer } = request.user;
    const result = await Order.create({ ...request.body, customer });
    response.status(201).json(result);
};

const deleteOrder = async (request, response, next) => {
    const { orderId } = request.params;
    const result = await Order.findByIdAndDelete(orderId);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    response.json({ message: "Order deleted" });
};


module.exports = {
    getOrders: controllerWrapper(getOrders),
    getOrder: controllerWrapper(getOrder),
    addOrder: controllerWrapper(addOrder),
    deleteOrder: controllerWrapper(deleteOrder),
};
