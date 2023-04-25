import express from "express";
import {
  CreateUser,
  getUsers,
  findById,
  deleteById,
  patchById,
} from "../controller/usersController.js";

const router = express.Router();

//
router.get("/", getUsers);

// Creare User
router.post("/", CreateUser);

// Cautare dupa id
router.get("/:id", findById);

//Stergere dupa id
router.delete("/:id", deleteById);

//Modificare date id
router.patch("/:id", patchById);

export default router;
