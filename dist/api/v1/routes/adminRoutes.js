"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminController_1 = require("../controllers/adminController"); // ✅ Correct import
const authenticate_1 = require("../middleware/authenticate");
const authorize_1 = __importDefault(require("../middleware/authorize"));
const router = express_1.default.Router();
router.post("/setCustomClaims", authenticate_1.authenticate, (0, authorize_1.default)({ hasRole: ["admin"] }), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, adminController_1.setCustomClaims)(req, res, next);
    }
    catch (error) {
        next(error); // ✅ Ensure Express catches errors properly
    }
}));
exports.default = router;
