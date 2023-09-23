import express from "express";
import cors from "cors";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";

const app=express();

app.use(cors({
    credentials:true 
}))
app.use(compression)
app.use(bodyParser.json())
app.use(cookieParser())

const server=http.createServer(app);

const PORT=8080;
server.listen(PORT,()=>{
    console.log(`Server Running in port:${PORT}`)
})
// console.log("Hello from typescript server")