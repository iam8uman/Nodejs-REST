this is user routes where our maint routing happens like this for eg .
GET users/ ------------ finds all users
POST users/ ----------- Create a user
GET users/:id --------- find user's details
DELETE users/:id ------ Delete a user
PATCH users/:id ------- Update a user


## controllers dirctory is just for making routes simple 
Here in case of routes there are multiple callback methods which do their own works . 
Here we gonna do some work so that we just use controllers's method in routes

This makes our code so simple and easy to read.


## code with comment 
import express from "express";
import {createNewUser,getUsers,getUserbyId,deleteById, updateById} from '../controllers/users.js'


const router = express.Router(); // to use router initilizing

// all routes starting with /users because we already define in the index.js
router.get("/", getUsers);

// now for creating new user we need to use post method
router.post("/", createNewUser);

// get users/2 => req.params
router.get("/:id", getUserbyId);

//delete the user specified by id
router.delete("/:idd", deleteById);

// update the user details
router.patch("/:idd", updateById);

export default router;
