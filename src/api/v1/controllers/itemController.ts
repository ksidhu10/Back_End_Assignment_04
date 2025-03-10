
import { Request, Response, NextFunction } from "express";
import * as itemService from "../services/itemService";
import type { Item } from "../models/itemModel"
import { successResponse } from "../models/responseModel";


export const getAllItems = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try{
        const items: Item[] = await itemService.getAllItems();
        res.status(200).json(
            successResponse(items, "Items retrieved sucessfully")
        );

    }catch(error){
        next(error);
    }
};

export const createItem = async(
    req: Request,
    res: Response,
    next: NextFunction 
): Promise<void> => {
    try {
        const newItem: Item = await itemService.createItem(req.body);
        res.status(201).json(
    
            successResponse(newItem, "Item created successfully")
        );
    }catch(error){
        next(error);
    }
};

export const updateItem = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const updatedItem: Item = await itemService.updateItem(
            req.params.id,
            req.body
        );
        res.status(200).json(
            successResponse(updateItem, "Item updated successfully")
        );

    }catch (error){
        next(error);
    }
};

export const deleteItem = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try{
        await itemService.deleteItem(req.params.id);
        res.status(200).json(
           successResponse(null, "Item deleted successfully")
        );
    }catch(error){
        next(error);
    }
};
