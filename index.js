// const Blockchain = require("./blockchain");
// const Block = require("./block");

// let jsChain = new Blockchain();
// jsChain.addBlock(new Block(new Date(), {
//   title: "利群香烟",
//   location: "园区第二食堂",
//   amount: "18.5元",
// }));


// console.log(JSON.stringify(jsChain, null, 4));
// console.log("区块链是否合法? " + jsChain.checkValid());


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
server.set("trust proxy", 1); // trust first proxy
server.set("port", configure.port);
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use(cookieParser());
server.use(compression());
server.use("/api", api);

// eslint-disable-next-line no-shadow
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
