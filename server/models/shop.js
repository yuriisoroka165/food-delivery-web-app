const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const shopSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    { versionKey: false }
);

shopSchema.post("save", handleMongooseError);


const Shop = model("shop", shopSchema);

module.exports = { Shop };


