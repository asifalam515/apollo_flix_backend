import mongoose from "mongoose";
import app from "./app";
import dotenv from "dotenv";
import "dotenv/config";

dotenv.config();

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://apollo_flix:9GGRcHJR4aWEwgkI@cluster0.6tngyrc.mongodb.net/apollo_flix?retryWrites=true&w=majority&appName=Cluster0"
    );

    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
