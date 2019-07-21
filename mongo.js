const MongoClient = require("mongodb").MongoClient;
const DB_CONFIG = require("../db");

module.exports = {
  insert: async (object, collectionName) => {
    let client;
    try {
      //连接数据库
      client = await MongoClient.connect(DB_CONFIG.url, { useNewUrlParser: true });
    } catch (e) {
      console.error("连接数据库客户端异常");
      return { success: false, message: "连接数据库客户端异常" }
    }

    if (client) {
      let db = client.db(DB_CONFIG.dbname);
      let res;
      try {
        res = await db.collection(collectionName).insertOne(object);
      } catch (e) {
        console.error("数据写入失败");
        return { success: false, message: "数据写入失败" }
      } finally {
        client.close();
      }

      if (res) {
        return res.result;
      } else {
        return { success: false, message: "数据写入失败" }
      }
    } else {
      return { success: false, message: "连接数据库客户端异常,请检查数据库是否正在运行" }
    }
  }
}