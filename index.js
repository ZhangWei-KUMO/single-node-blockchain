

const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const dev = process.env.NODE_ENV !== "production";
const configure = require("./configure.js");

const app = next({ dev });

const api = require("./api");
const handle = app.getRequestHandler();
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(cookieParser());
server.use(compression());
server.use("/api", api);

server.use((req, res, next) => next());
app.prepare().then(() => {
  server.use(function (req, res, next) {
    next();
  });
  server.get("*", (req, res) => handle(req, res));

  server.listen(configure.port, (err) => {
    if (err) throw err;
    console.log(`启动安全服务器,端口号：${configure.port}`);
  });
});

process.on("uncaughtException", (err) => {
  console.log(err);
});
