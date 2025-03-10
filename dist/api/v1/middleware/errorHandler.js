"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpConstants_1 = require("../constants/httpConstants");
const responseModel_1 = require("../models/responseModel");
const errorHandler = (err, req, res, _next) => {
    const statusCode = err.statusCode || httpConstants_1.HTTP_STATUS.INTERNAL_SERVER_ERROR;
    const code = err.code || "UNKNOWN_ERROR";
    console.error(`Error: ${err.message} (Code: ${code})`);
    res.status(statusCode).json((0, responseModel_1.errorResponse)(err.message, code));
};
exports.default = errorHandler;
