const Blockchain = require("./blockchain");
const Block = require("./block");

let jsChain = new Blockchain();
jsChain.addBlock(new Block(new Date(), {
  title: "利群香烟",
  location: "园区第二食堂",
  amount: "18.5元",
}));
jsChain.addBlock(new Block(new Date(), {
  title: "停车费",
  location: "保卫科",
  amount: "4000元",
}));
jsChain.addBlock(new Block(new Date(), {
  title: "利群香烟",
  location: "园区第二食堂",
  amount: "18.5元",
}));
jsChain.addBlock(new Block(new Date(), {
  title: "停车费",
  location: "保卫科",
  amount: "4000元",
}));
jsChain.addBlock(new Block(new Date(), {
  title: "利群香烟",
  location: "园区第二食堂",
  amount: "18.5元",
}));
jsChain.addBlock(new Block(new Date(), {
  title: "停车费",
  location: "保卫科",
  amount: "4000元",
}));
jsChain.addBlock(new Block(new Date(), {
  title: "利群香烟",
  location: "园区第二食堂",
  amount: "18.5元",
}));
jsChain.addBlock(new Block(new Date(), {
  title: "停车费",
  location: "保卫科",
  amount: "4000元",
}));
jsChain.addBlock(new Block(new Date(), {
  title: "利群香烟",
  location: "园区第二食堂",
  amount: "18.5元",
}));
jsChain.addBlock(new Block(new Date(), {
  title: "停车费",
  location: "保卫科",
  amount: "4000元",
}));
jsChain.addBlock(new Block(new Date(), {
  title: "利群香烟",
  location: "园区第二食堂",
  amount: "18.5元",
}));
jsChain.addBlock(new Block(new Date(), {
  title: "停车费",
  location: "保卫科",
  amount: "4000元",
}));
jsChain.addBlock(new Block(new Date(), {
  title: "利群香烟",
  location: "园区第二食堂",
  amount: "18.5元",
}));
jsChain.addBlock(new Block(new Date(), {
  title: "停车费",
  location: "保卫科",
  amount: "4000元",
}));
jsChain.addBlock(new Block(new Date(), {
  title: "利群香烟",
  location: "园区第二食堂",
  amount: "18.5元",
}));
jsChain.addBlock(new Block(new Date(), {
  title: "停车费",
  location: "保卫科",
  amount: "4000元",
}));

console.log(JSON.stringify(jsChain, null, 4));
console.log("区块链是否合法? " + jsChain.checkValid());
