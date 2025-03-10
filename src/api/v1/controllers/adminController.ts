import { Request, Response, NextFunction } from "express";
import { getAuth } from "firebase-admin/auth";

const auth = getAuth();

/**
 * Set custom claims for a user (assign roles).
 */
export const setCustomClaims = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { uid, role } = req.body;

        if (!uid || !role) {
            return res.status(400).json({ message: "User ID and role are required." });
        }

        await auth.setCustomUserClaims(uid, { role });

        return res.status(200).json({ message: `Role ${role} assigned to user ${uid}.` });
    } catch (error) {
        next(error); // ✅ Ensure errors are passed to Express error handler
    }
};
