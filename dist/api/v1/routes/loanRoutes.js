"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = require("../middleware/validate"); // ✅ Ensure correct import
const itemValidations_1 = require("../Validations/itemValidations");
const itemController_1 = require("../controllers/itemController");
const authenticate_1 = require("../middleware/authenticate");
const authorize_1 = __importDefault(require("../middleware/authorize")); // ✅ Corrected import
const router = express_1.default.Router();
router.get("/", authenticate_1.authenticate, itemController_1.getAllItems);
router.post("/", authenticate_1.authenticate, (0, authorize_1.default)({ hasRole: ["admin", "manager"] }), (0, validate_1.validateRequest)(itemValidations_1.itemSchema), // ✅ Ensure TypeScript doesn't complain
itemController_1.createItem);
router.put("/:id", authenticate_1.authenticate, (0, authorize_1.default)({ hasRole: ["admin", "manager"] }), (0, validate_1.validateRequest)(itemValidations_1.itemSchema), itemController_1.updateItem);
router.delete("/:id", authenticate_1.authenticate, (0, authorize_1.default)({ hasRole: ["admin", "manager"] }), itemController_1.deleteItem);
exports.default = router;
