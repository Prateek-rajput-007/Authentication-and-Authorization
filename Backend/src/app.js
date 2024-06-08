const express = require("express");
const router = require("./routes/user-routes");
const cors = require('cors');
require("dotenv").config();
require('./config/db');
const app = express();
const PORT = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");
//middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(cookieParser());
app.use(express.json());
app.use("/api",router);


app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
})