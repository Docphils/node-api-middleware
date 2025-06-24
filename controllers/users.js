import {v4 as uuid} from "uuid";
import {validationResult} from "express-validator";

export const getUsers = async (req, res) => {
    try {
        const response = await fetch("http://localhost:3000/users");
        if (!response.ok) throw new Error("Failed to fetch users");

        const users = await response.json();
        res.status(200).json(users);
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).json({error: "Internal server error"});
    }
};

export const saveUsers = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json({error: "Validation failed", details: errors.array()});
    }

    const user = req.body;
    const id = uuid();
    const newUser = {...user, id};

    try {
        const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newUser),
        });

        if (!response.ok) throw new Error("Failed to save user");

        res.status(201).json({message: "User created", user: newUser});
    } catch (err) {
        console.error("Failed to save user:", err);
        res.status(500).json({error: "Failed to save user"});
    }
};

export const getUser = async (req, res) => {
    const {id} = req.params;

    try {
        const response = await fetch(`http://localhost:3000/users/${id}`);
        if (response.status === 404) {
            return res.status(404).json({error: "User not found"});
        }

        const user = await response.json();
        res.status(200).json(user);
    } catch (err) {
        console.error("Error fetching user:", err);
        res.status(500).json({error: "Internal server error"});
    }
};

export const deleteUser = async (req, res) => {
    const {id} = req.params;

    try {
        const response = await fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE",
        });

        if (response.status === 404) {
            return res.status(404).json({error: "User not found"});
        }

        res.status(200).json({message: "User deleted successfully"});
    } catch (err) {
        console.error("Error deleting user:", err);
        res.status(500).json({error: "Internal server error"});
    }
};

export const updateUser = async (req, res) => {
    const {id} = req.params;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json({error: "Validation failed", details: errors.array()});
    }

    const updatedUser = req.body;

    try {
        const response = await fetch(`http://localhost:3000/users/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedUser),
        });

        if (response.status === 404) {
            return res.status(404).json({error: "User not found"});
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (err) {
        console.error("Update failed:", err);
        res.status(500).json({error: "Failed to update user"});
    }
};
