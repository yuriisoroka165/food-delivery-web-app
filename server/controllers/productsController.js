const { productModel } = require("../models");
const { HttpError, controllerWrapper } = require("../helpers");

const { Product } = productModel;

const getProducts = async (request, response, next) => {
    const { _id: owner } = request.user;
    const { page = 1, limit = 10, favorite } = request.query;
    const skip = (page - 1) * limit;
    const query = { owner };
    if (favorite !== undefined) {
        query.favorite = favorite;
    }
    const result = await Product.find(query, "-createdAt -updatedAt", { skip, limit }).populate("owner", "email");
    if (!result) {
        throw HttpError(404, "Not found");
    }
    response.json(result);
};

const getProduct = async (request, response, next) => {
    const { productId } = request.params;
    const result = await Product.findById(productId);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    response.json(result);
};

const addProduct = async (request, response, next) => {
    const { _id: owner } = request.user;
    const result = await Product.create({ ...request.body, owner });
    response.status(201).json(result);
};

const deleteProduct = async (request, response, next) => {
    const { productId } = request.params;
    const result = await Product.findByIdAndDelete(productId);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    response.json({ message: "product deleted" });
};

const updateProduct = async (request, response, next) => {
    const { productId } = request.params;
    const result = await Product.findByIdAndUpdate(productId, request.body, {
        new: true,
    });
    if (!result) {
        throw HttpError(404, "Not found");
    }
    response.json(result);
};

module.exports = {
    getProducts: controllerWrapper(getProducts),
    getProduct: controllerWrapper(getProduct),
    addProduct: controllerWrapper(addProduct),
    deleteProduct: controllerWrapper(deleteProduct),
    updateProduct: controllerWrapper(updateProduct),
};
