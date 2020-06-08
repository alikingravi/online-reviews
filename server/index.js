const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
require("dotenv").config();

// Database
const db = require("./config/database");
// test connection
db.authenticate()
  .then(() => console.log("Database connection established ..."))
  .catch((err) => console.log("Error: " + err));

// Routes
app.use("/api/auth", require("./routes/auth-routes"));
app.use("/api/products", require("./routes/product-routes"));
app.use("/api/reviews", require("./routes/review-routes"));
app.use("/api/users", require("./routes/user-routes"));
app.use("/api/stats", require("./routes/stats-routes"));

// DB and Server Connection
db.sync({ force: false })
  .then(() => {
    const port = 5000 || process.env.BACKEND_PORT;
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  })
  .catch((err) => console.log("Failed to connect to db: ", err));
