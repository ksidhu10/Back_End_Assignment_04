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
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCustomClaims = void 0;
const auth_1 = require("firebase-admin/auth");
const auth = (0, auth_1.getAuth)();
/**
 * Set custom claims for a user (assign roles).
 */
const setCustomClaims = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { uid, role } = req.body;
        if (!uid || !role) {
            return res.status(400).json({ message: "User ID and role are required." });
        }
        yield auth.setCustomUserClaims(uid, { role });
        return res.status(200).json({ message: `Role ${role} assigned to user ${uid}.` });
    }
    catch (error) {
        next(error); // ✅ Ensure errors are passed to Express error handler
    }
});
exports.setCustomClaims = setCustomClaims;
