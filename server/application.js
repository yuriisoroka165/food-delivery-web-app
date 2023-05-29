const express = require("express");

const logger = require("morgan");
const cors = require("cors");

const usersRouter = require("./routes/api/authorization");
const productsRouter = require("./routes/api/products");
const ordersRouter = require("./routes/api/orders");

const application = express();

const formatsLogger = application.get("env") === "development" ? "dev" : "short";

application.use(logger(formatsLogger));
application.use(cors());
application.use(express.json());

application.use("/users", usersRouter);
application.use("/api/products", productsRouter);
application.use("/api/orders", ordersRouter);

application.use((request, response) => {
    response.status(404).json({ message: "Not found" });
});

application.use((error, request, response, next) => {
    const { status = 500, message = "Server error" } = error;
    response.status(status).json({ message });
});

module.exports = application;
