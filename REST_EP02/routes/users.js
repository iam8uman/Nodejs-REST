import express from "express";
import {createNewUser,getUsers,getUserbyId,deleteById, updateById} from '../controllers/users.js'


const router = express.Router(); // to use router initilizing

router.get("/", getUsers);

router.post("/", createNewUser);

router.get("/:id", getUserbyId);

router.delete("/:idd", deleteById);

router.patch("/:idd", updateById);

export default router;
