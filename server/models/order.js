const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const orderSchema = new Schema(
    {
        customer: {
            type: Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
        products: [
            {
                product: {
                    type: Schema.Types.ObjectId,
                    ref: "product",
                },
                quantity: {
                    type: Number,
                    required: true,
                },
            },
        ],
        totalAmount: {
            type: Number,
            required: true,
        },
    },
    { versionKey: false }
);

orderSchema.post("save", handleMongooseError);


const Order = model("order", orderSchema);

module.exports = { Order };


