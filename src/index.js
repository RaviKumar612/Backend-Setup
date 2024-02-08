import dotenv from "dotenv";
import connectDB from "./db/indexdb.js";
import express from "express";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB().then(() => {
  try {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Port is listening on ${process.env.PORT}`);
    });
  } catch (err) {
    console.log("EXPRESS connection failed !!", err);
  }
});
