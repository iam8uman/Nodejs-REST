import express from "express";
import bodyParser from "body-parser";

// router import
import usersRouter from "./routes/users.js";


const app = express(); //initilizing the express
const PORT = 5000; //defining port for backend

app.use(bodyParser.json()); // saying that our whole app i.e application use json data

app.use('/users',usersRouter) // tell app to use userRouter for routing also tell which is starting routing address here /users

app.listen(PORT,()=>console.log(`Server running at the port: http://localhost:${PORT}`)) // where to listen backend response 
