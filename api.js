const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;

const Blockchain = require("./blockchain");
const Block = require("./block");
const DB_CONFIG = require("./db");

router.post("/buy", async (req, res) => {

  try {
    let client = await MongoClient.connect(DB_CONFIG.url, { useNewUrlParser: true });
    let db = client.db(DB_CONFIG.dbname);
    try {
      // 获取当前数据库中链数据
      let currentChain = await db.collection("testchain").find({}).toArray();
      let lastestBlock = currentChain.pop();
      // 当前链的最新区块
      let block = new Block(new Date(), req.body, lastestBlock.hash);
      await db.collection("testchain").insertOne(block);
      res.json({ result: "success" })
    } catch (e) {
      console.error("区块链更新失败失败");
    } finally {
      client.close();
    }
  } catch (e) {
    console.error("连接数据库客户端异常");
  }
});

router.get("/chain", async (req, res) => {
  try {
    let client = await MongoClient.connect(DB_CONFIG.url, { useNewUrlParser: true });
    let db = client.db(DB_CONFIG.dbname);
    try {
      let back = await db.collection("testchain").find({}).sort({ timestamp: -1 }).toArray();
      if (back.length === 0) {
        res.json({ name: "" });
        let jsChain = new Block(new Date(), "创世区块", "0");
        await db.collection("testchain").insertOne(jsChain);
        res.json({ chain: [jsChain] })
      } else {
        res.json(back)
      }
    } catch (e) {
      console.error("查询数据失败");
      res.json({ name: "xxx" })

    } finally {
      client.close();
    }
  } catch (e) {
    console.error("连接数据库客户端异常");
  }
  // let jsChain = new Blockchain();
  // jsChain.addBlock(new Block(new Date(), {
  //   title: "利群香烟",
  //   location: "园区第二食堂",
  //   amount: "18.5元",
  // }));

  // console.log(JSON.stringify(jsChain, null, 4));
  // console.log("区块链是否合法? " + jsChain.checkValid());

  // res.json({ valid: jsChain.checkValid(), chain: jsChain.chain })
});

router.get("/remove", async (req, res) => {
  try {
    let client = await MongoClient.connect(DB_CONFIG.url, { useNewUrlParser: true });
    let db = client.db(DB_CONFIG.dbname);
    try {
      let back = await db.collection("testchain").remove({});
      res.json({ name: "clear all" })
    } catch (e) {
      console.error("查询数据失败");
    } finally {
      client.close();
    }
  } catch (e) {
    console.error("连接数据库客户端异常");
  }
})
module.exports = router;