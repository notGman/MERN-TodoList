const mongoose = require("mongoose");
require("dotenv").config();

const db = process.env.DATABASE.replace("<password>", process.env.DATABASE_PASSWORD);
mongoose.set("strictQuery", true);
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection Successful!!!"))
  .catch((err) => console.log(err));
