import { Request, Response, NextFunction } from "express";
import { AuthorizationOptions } from "../models/authorizationOptions";
import { MiddlewareFunction } from "../types/express";
import { AuthorizationError } from "../error/error";

/**
 * Middleware to check if a user is authorized based on their role.
 */
export default function isAuthorized(opts: AuthorizationOptions): MiddlewareFunction {
    return (req: Request, res: Response, next: NextFunction) => {
        const { role, uid } = res.locals;
        const { id } = req.params;

        
        if (opts.allowSameUser && id && uid === id) {
            return next();
        }

        
        if (!role) {
            return next(new AuthorizationError("Forbidden: No role found", "ROLE_NOT_FOUND"));
        }

        
        if (opts.hasRole.includes(role)) {
            return next();
        }

        return next(new AuthorizationError("Forbidden: Insufficient role", "INSUFFICIENT_ROLE"));
    };
}
