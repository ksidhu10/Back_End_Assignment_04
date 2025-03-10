import Joi from "joi";

/**
 * Validation schema for loan items.
 */
export const itemSchema = Joi.object({
    name: Joi.string().required(),
    amount: Joi.number().required(),
});
