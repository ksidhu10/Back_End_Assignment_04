import express from "express";
import { setCustomClaims } from "../controllers/adminController"; 
import { authenticate } from "../middleware/authenticate"; 
import isAuthorized from "../middleware/authorize"; 

const router: express.Router = express.Router();

router.post(
    "/setCustomClaims",
    authenticate,
    isAuthorized({ hasRole: ["admin"] }),
    async (req, res, next) => { 
        try {
            await setCustomClaims(req, res, next);
        } catch (error) {
            next(error); 
        }
    }
);

export default router;
