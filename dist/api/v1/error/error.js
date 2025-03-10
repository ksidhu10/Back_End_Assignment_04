"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationError = exports.AuthenticationError = exports.ServiceError = exports.RepositoryError = exports.AppError = void 0;
const httpConstants_1 = require("../constants/httpConstants"); // ✅ Correct import
/**
 * Base error class for application errors.
 * Extends the built-in Error class to include an error code and status code.
 */
class AppError extends Error {
    /**
     * Creates a new AppError instance.
     * @param {string} message - The error message.
     * @param {string} code - The error code.
     * @param {number} statusCode - The http response code.
     */
    constructor(message, code, statusCode) {
        super(message);
        this.message = message;
        this.code = code;
        this.statusCode = statusCode;
        this.name = this.constructor.name;
        Object.setPrototypeOf(this, new.target.prototype);
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.AppError = AppError;
/**
 * Class representing a repository error.
 * Extends the AppError class for database and data access related errors.
 */
class RepositoryError extends AppError {
    /**
     * Creates a new RepositoryError instance.
     * @param {string} message - The error message.
     * @param {string} code - The error code.
     * @param {number} statusCode - The http response code.
     */
    constructor(message, code = "REPOSITORY_ERROR", statusCode = httpConstants_1.HTTP_STATUS.INTERNAL_SERVER_ERROR) {
        super(message, code, statusCode);
    }
}
exports.RepositoryError = RepositoryError;
/**
 * Class representing a service error.
 * Extends the AppError class for business logic related errors.
 */
class ServiceError extends AppError {
    /**
     * Creates a new ServiceError instance.
     * @param {string} message - The error message.
     * @param {string} code - The error code.
     * @param {number} statusCode - The http response code.
     */
    constructor(message, code = "SERVICE_ERROR", statusCode = httpConstants_1.HTTP_STATUS.INTERNAL_SERVER_ERROR) {
        super(message, code, statusCode);
    }
}
exports.ServiceError = ServiceError;
/**
 * Class representing an authentication error.
 * Extends the AppError class for authentication related errors.
 */
class AuthenticationError extends AppError {
    /**
     * Creates a new AuthenticationError instance.
     * @param {string} message - The error message.
     * @param {string} code - The error code.
     * @param {number} statusCode - The http response code.
     */
    constructor(message, code = "AUTHENTICATION_ERROR", statusCode = httpConstants_1.HTTP_STATUS.UNAUTHORIZED) {
        super(message, code, statusCode);
    }
}
exports.AuthenticationError = AuthenticationError;
/**
 * Class representing an authorization error.
 * Extends the AppError class for authorization related errors.
 */
class AuthorizationError extends AppError {
    /**
     * Creates a new AuthorizationError instance.
     * @param {string} message - The error message.
     * @param {string} code - The error code.
     * @param {number} statusCode - The http response code.
     */
    constructor(message, code = "AUTHORIZATION_ERROR", statusCode = httpConstants_1.HTTP_STATUS.FORBIDDEN) {
        super(message, code, statusCode);
    }
}
exports.AuthorizationError = AuthorizationError;
