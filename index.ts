import express, {Express} from "express";
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app: Express = express();

app.use("/openai", require("./routes/openaiRoute"))

app.listen(port, () => console.log(`Server started on port ${port}`))