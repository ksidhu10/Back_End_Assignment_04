"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isAuthorized;
const error_1 = require("../error/error");
/**
 * Middleware to check if a user is authorized based on their role.
 */
function isAuthorized(opts) {
    return (req, res, next) => {
        const { role, uid } = res.locals;
        const { id } = req.params;
        // ✅ Allow access if the user is accessing their own data
        if (opts.allowSameUser && id && uid === id) {
            return next();
        }
        // ✅ Check if the user's role exists
        if (!role) {
            return next(new error_1.AuthorizationError("Forbidden: No role found", "ROLE_NOT_FOUND"));
        }
        // ✅ Check if the user's role is allowed
        if (opts.hasRole.includes(role)) {
            return next();
        }
        return next(new error_1.AuthorizationError("Forbidden: Insufficient role", "INSUFFICIENT_ROLE"));
    };
}
