const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Set name for food item"],
        },
        price: {
            type: String,
        },
        imageLink: {
            type: String,
        },
        shop: {
            type: Schema.Types.ObjectId,
            ref: "shop",
            required: true,
        },
    },
    { versionKey: false }
);

productSchema.post("save", handleMongooseError);

const requiredFieldsSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string()
        .pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/)
        .required(),
    favorite: Joi.boolean(),
});

const schemas = {
    requiredFieldsSchema,
};

const Product = model("product", productSchema);

module.exports = { Product, schemas };
