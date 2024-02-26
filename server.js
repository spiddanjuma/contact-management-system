const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./Middleware/errorHandler");
const connectDb = require("./Config/dbConnection");
connectDb();

const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());

app.use("/api/contacts", require("./Routes/contactRoutes")); 
app.use("/api/users", require("./Routes/userRoutes")); 

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
}) ; 