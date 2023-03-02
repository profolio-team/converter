const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 8423;
app.use(bodyParser.json({limit: "100mb"}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
routes(app);

async function start() {
  app.listen(PORT, () => {
    console.log(`
-------------------------------
Server on: ${PORT}
http://localhost:${PORT}/
-------------------------------
`);
  });
}
start();
