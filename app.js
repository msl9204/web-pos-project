const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
// Port
const port = 5000;

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Log requests to the console.
app.use(logger("dev"));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);
