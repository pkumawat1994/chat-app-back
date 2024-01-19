import express from "express";
import { getUser } from "./src/controller/UserController.js";

const app=express();

app.get("/user",getUser)




app.listen(3040,()=>console.log("server run.."))