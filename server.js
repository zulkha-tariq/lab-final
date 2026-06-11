const express = require("express");
const cors = require("cors");

const employeeRoutes =
require("./routes/employees");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/employees", employeeRoutes);

app.listen(3000, () => {
    console.log("Server Running");
});