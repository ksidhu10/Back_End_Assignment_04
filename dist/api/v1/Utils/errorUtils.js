"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isError = isError;
exports.hasErrorCode = hasErrorCode;
exports.getErrorMessage = getErrorMessage;
exports.getErrorCode = getErrorCode;
const UNKNOWN_ERROR_CODE = "UNKNOWN_ERROR";
/**
 * Type guard to check if an unknown value is an Error object.
 *
 * @param error - Value to check
 * @returns True if the value is an Error instance, false otherwise
 */
function isError(error) {
    return error instanceof Error;
}
/**
 * Type guard to check if an object has a 'code' property of type string.
 * Useful for handling error objects that may include error codes.
 *
 * @param error - Value to check
 * @returns True if the value is an object with a string code property
 */
function hasErrorCode(error) {
    return (typeof error === "object" &&
        error !== null &&
        "code" in error &&
        typeof error.code === "string");
}
/**
 * Safely extracts an error message from an unknown value.
 * Returns the error message if the value is an Error object,
 * otherwise converts the value to a string.
 *
 * @param error - Value to extract message from
 * @returns String representation of the error
 */
function getErrorMessage(error) {
    if (isError(error)) {
        return error.message;
    }
    return String(error);
}
/**
 * Safely extracts an error code from an unknown value.
 * Returns the code if the value has one, otherwise returns UNKNOWN_ERROR_CODE.
 *
 * @param error - Value to extract code from
 * @returns Error code string
 */
function getErrorCode(error) {
    if (hasErrorCode(error)) {
        return error.code;
    }
    return UNKNOWN_ERROR_CODE;
}
