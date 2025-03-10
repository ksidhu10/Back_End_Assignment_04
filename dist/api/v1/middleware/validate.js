"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
/**
 * Middleware to validate request data against a Joi schema.
 */
const validateRequest = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            res.status(400).json({
                message: "Validation failed",
                errors: error.details.map((detail) => detail.message),
            });
            return; // ✅ Ensure function exits after sending a response
        }
        next(); // ✅ Call next middleware
    };
};
exports.validateRequest = validateRequest;
