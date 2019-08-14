# single-node-blockchain
单节点区块链应用

### 生产环境
git init --bare lai.git
git remote add product ubuntu@118.25.214.169:~/disk2/gits/lai.git 
ssh ubuntu@118.25.214.169
CloudWave$
git push product master
CloudWave$
docker container list

```bash
#!/bin/bash
TARGET="/home/ubuntu/disk2/codes/lai"
GIT_DIR="/home/ubuntu/disk2/gits/lai.git"
BRANCH="master"

while read oldrev newrev ref
do
if [[ $ref = refs/heads/$BRANCH ]];
        then
                echo "Ref $ref received. 部署 ${BRANCH} 分支到生产环境中"
                git --work-tree=$TARGET --git-dir=$GIT_DIR checkout -f
                echo "停止运行旧后台容器"
                docker stop lai-vol
                echo "删除旧后台容器"
                docker rm lai-vol
                echo "删除旧后台镜像"
                docker rmi lai-img
                echo "构建新后台镜像"
                cd $TARGET
                docker build -t lai-img .
                echo "启动新后台容器"
                docker run --name lai-vol -p 5200:80 -d lai-img
                echo "项目部署成功"
        else
                echo "部署失败，请重新部署"
        fi
done
```

> chmod ug+x post-receive