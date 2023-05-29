const express = require("express");
const router = express.Router();

const { authorizationController } = require("../../controllers");
const { validateData, authenticate } = require("../../middlewares");
const { userModel } = require("../../models");

const { schemas } = userModel;

router.post("/register", validateData(schemas.registerSchema), authorizationController.register);

router.get("/verify/:verificationToken", authorizationController.verifyEmail);
router.post("/verify", validateData(schemas.emailSchema), authorizationController.resendVerifyEmail);

router.post("/login", validateData(schemas.registerSchema), authorizationController.login);
router.get("/current", authenticate, authorizationController.getCurrent);
router.post("/logout", authenticate, authorizationController.logout);

module.exports = router;
