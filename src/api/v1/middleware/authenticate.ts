import { Request, Response, NextFunction } from "express";
import { getAuth } from "firebase-admin/auth";
import { AuthenticationError } from "../error/error";
import { getErrorMessage, getErrorCode } from "../Utils/errorUtils";

const auth = getAuth(); 

/**
 * Middleware to authenticate a user using Firebase ID token.
 */
export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return next(new AuthenticationError("Unauthorized: No token provided", "TOKEN_NOT_FOUND"));
    }

    try {
        const decodedToken = await auth.verifyIdToken(token);
        res.locals.uid = decodedToken.uid;
        res.locals.role = decodedToken.role || "user"; 
        next();
    } catch (error) {
        return next(new AuthenticationError(`Unauthorized: ${getErrorMessage(error)}`, getErrorCode(error)));
    }
};
