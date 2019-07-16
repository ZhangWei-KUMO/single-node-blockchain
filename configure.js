var configure = {
  development:{
    "port": 80
},
  test:{
    "port": 4001
},
  production:{
    "port": 80
  }
};

module.exports = configure[process.env.NODE_ENV || "development"];