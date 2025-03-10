"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const authenticate_1 = require("../middleware/authenticate");
const authorize_1 = __importDefault(require("../middleware/authorize"));
const router = express_1.default.Router();
router.get("/:id", authenticate_1.authenticate, (0, authorize_1.default)({ hasRole: ["admin"] }), userController_1.getUserDetails);
exports.default = router;
