# Enable Access Control 启动访问控制

[原文链接](https://docs.mongodb.com/manual/tutorial/enable-authentication/)

一旦在MongoDB中启动了访问控制，所有数据库的用户就需要进行自我身份证明，用户根据其角色会有操作权限限制。

在启动数据库访问权限之前，开发人员需要在admin DB中拥有一个具有[userAdmin](https://docs.mongodb.com/manual/reference/built-in-roles/#userAdmin)或[userAdminAnyDatabase](https://docs.mongodb.com/manual/reference/built-in-roles/#userAdminAnyDatabase)角色的用户。该用户具有对于其他普通用户和角色的管理权力。

> 众所周知MongoDB的默认端口为27017,数据存储路径为/var/lib/mongodb。

```bash
# 本地启动一个mongod实例
mongod --port 27017 --dbpath /var/lib/mongodb
# 在一个新终端里连接该端口
mongo --port 27017
# 进入admin数据库
use admin
# 创建一个名为myUserAdmin的用户，确认角色为userAdminAnyDatabase及readWriteAnyDatabase
db.createUser(
  {
    user: "myUserAdmin",
    pwd: "abc123",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]
  }
)
```


### 重启MongoDB实例

关掉终端或者
```bash
db.adminCommand( { shutdown: 1 } )
```

```bash
# 使用--auth启动数据库
mongod --auth --port 27017 --dbpath /var/lib/mongodb
```


### 再次连接数据库

```bash
mongo --port 27017 -u "myUserAdmin" --authenticationDatabase "admin" -p
```

```bash
# 随便创建一个数据库，然后给该角色赋予角色权限
use test
db.createUser(
  {
    user: "myTester",
    pwd: "xyz123",
    roles: [ { role: "readWrite", db: "test" },
             { role: "read", db: "reporting" } ]
  }
)
```