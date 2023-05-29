const { isValidObjectId } = require("mongoose");

const { HttpError } = require("../helpers");

const isValidId = (request, response, next) => {
    const { orderId } = request.params;
    if (!isValidObjectId(orderId)) {
        next(HttpError(400, `${orderId} is not valid id`));
    }
    next();
};

module.exports = isValidId;
