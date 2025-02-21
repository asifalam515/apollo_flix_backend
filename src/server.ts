import mongoose from "mongoose";
import app from "./app";

const url =
  "mongodb+srv://apollo_flix:9GGRcHJR4aWEwgkI@cluster0.6tngyrc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
async function main() {
  await mongoose.connect(url);
  app.listen(5000, () => {
    console.log(`Example app listening on port ${5000}`);
  });
  try {
  } catch (err) {
    console.log(err);
  }
}
main();
