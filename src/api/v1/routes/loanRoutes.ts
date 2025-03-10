import express, { Router } from "express";
import { validateRequest } from "../middleware/validate"; 
import { itemSchema } from "../Vlidations/itemValidations";
import { getAllItems, createItem, updateItem, deleteItem } from "../controllers/itemController";
import { authenticate } from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize"; 

const router: Router = express.Router();

router.get("/", authenticate, getAllItems);

router.post(
    "/",
    authenticate,
    isAuthorized({ hasRole: ["admin", "manager"] }),
    validateRequest(itemSchema as any),
    createItem
);

router.put(
	"/:id",
	authenticate,
	isAuthorized({ hasRole: ["admin", "manager"] }),
	validateRequest(itemSchema),
	updateItem
);

router.delete(
	"/:id",
	authenticate,
	isAuthorized({ hasRole: ["admin", "manager"] }),
	deleteItem
);

export default router;
