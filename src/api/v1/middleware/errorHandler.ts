import { Request, Response, NextFunction } from "express";
import { AppError } from "../error/error";
import { HTTP_STATUS } from "../constants/httpConstants";
import { errorResponse } from "../models/responseModel";

/**
 * Global error handler for Express.
 */
interface ExtendedError extends Error {
    code?: string;
    statusCode?: number;
}

const errorHandler = (err: ExtendedError, req: Request, res: Response, _next: NextFunction): void => {
    const statusCode = err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;
    const code = err.code || "UNKNOWN_ERROR";

    console.error(`Error: ${err.message} (Code: ${code})`);

    res.status(statusCode).json(errorResponse(err.message, code));
};


export default errorHandler;
