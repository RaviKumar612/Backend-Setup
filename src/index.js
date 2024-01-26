import dotenv from "dotenv";
import connectDB from "./db/indexdb.js";
cl;
dotenv.config({
  path: "./env",
});

connectDB();

// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERROR: ", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`Port is listening on ${process.env.PORT}`);
//     });
//   } catch (err) {
//     console.log("ERROR", err);
//     throw err;
//   }
// })();
