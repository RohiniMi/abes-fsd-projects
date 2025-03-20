import express from "express";
import cors from "cors";
import userRoute from './routes/login.js';
// const userRoute = require("./routes/login.js");
// const express = require("express");
// const cors = require("cors");

const port = 8800;

const app = express();
app.use(express.json());
app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:5500'
// }));

app.use("/login", userRoute)
app.listen(port, () => { console.log(`Listening on port ${port}`); });

// app.post("/", (req, res) => {
//     console.log(req.body); // Logs the JSON data sent by the client
//     console.log("hi");

//     res.send("Data received");
// });
// app.get('/', (req, res) => {
//     res.send('Hello, Express!');
// });

