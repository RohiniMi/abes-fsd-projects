import express from "express";
import cors from "cors";
import loginRoutes from './routes/login.js';

const port = 8800;

const app = express();
app.use(express.json());
app.use(cors());
// app.use(cors({
//     origin:'http://localhost:5500'
//   }));

app.use("/login",loginRoutes)
app.listen(port, () => { console.log(`Listening on port ${port}`); });

// app.post("/", (req, res) => {
//     console.log(req.body); // Logs the JSON data sent by the client
//     console.log("hi");

//     res.send("Data received");
// });
// app.get('/', (req, res) => {
//     res.send('Hello, Express!');
// });

