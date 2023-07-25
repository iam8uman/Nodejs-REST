import express from "express";
import cors from "cors";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";

const app=express();

app.use(cors({
    crendencials:true 
}))
app.use(compression)
app.use(bodyParser.json())
app.use(cookieParser)

// console.log("Hello world from typescript")
