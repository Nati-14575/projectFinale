const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const UserRoute = require("./routes/userRoutes");
const DATABASE_LOCAL = "mongodb://localhost:27017/final";

app.use(cors());
app.use(express.json());

try {
  mongoose.connect(
    DATABASE_LOCAL,
    {
      useNewUrlParser: true,
      useFindAndModify: true,
      useCreateIndex: true,
    },
    () => {
      console.log("Connected successfully");
    }
  );
} catch (err) {
  console.log(err);
}

// Routes
app.use("/users", UserRoute);

const PORT = 3001;
app.listen(PORT, () => {
  console.log("Listening to port" + PORT);
});
