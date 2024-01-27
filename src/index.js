import dotenv from "dotenv";
import connectDB from "./db/indexdb.js";
import express from "express";

const app = express();

dotenv.config({
  path: "./env",
});

connectDB().then(() => {
  try {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Port is listening on ${process.env.PORT}`);
    });
  } catch (err) {
    console.log("EXPRESS connection failed !!", err);
  }
});
