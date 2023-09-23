import express from "express";
import cors from "cors";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import mongoose from "mongoose";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(compression);
app.use(bodyParser.json());
app.use(cookieParser());

const server = http.createServer(app);

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server Running in port:${PORT}`);
});

const Mongo_URL =
  "mongodb+srv://suman191544:suman@cluster0.rbsrvz2.mongodb.net/";

mongoose.Promise=Promise;
mongoose.connect(Mongo_URL);
mongoose.connection.on('error',(error:Error)=>(console.log(error)))