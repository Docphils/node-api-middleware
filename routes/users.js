import express from "express";
import {
    deleteUser,
    getUser,
    getUsers,
    saveUsers,
    updateUser,
} from "../controllers/users.js";
import {body} from "express-validator";

const router = express.Router();

// Basic user validation rules
const userValidationRules = [
    body("name").notEmpty().isString().withMessage("Name is required"),
    body("age").isNumeric().withMessage("Numeric age is required"),
    body("location")
        .notEmpty()
        .isString()
        .withMessage("Location is required and must be a string"),
    body("Occupation")
        .isString()
        .withMessage("Occupation must be a valid string"),
];

router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.get("/", getUsers);
router.put("/:id", userValidationRules, updateUser);
router.post("/", userValidationRules, saveUsers);

export default router;
