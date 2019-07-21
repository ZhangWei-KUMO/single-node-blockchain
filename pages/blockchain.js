import React, { Component } from "react";
import { Row, Table } from "antd";
import Head from "next/head";
import { observer } from "mobx-react";
import { observable } from "mobx";
import moment from "moment";

@observer
class Market extends Component {
  @observable items = []
  async componentDidMount() {
    try {
      let res = await fetch("/api/chain");
      if (res) {
        let back = await res.json();
        this.items = back;
      } else {
        console.error("服务器无响应")
      }
    } catch (e) {
      console.error(e.toString())
    }
  }
  render() {
    const columns = [
      {
        title: '哈希值',
        dataIndex: 'hash',
        key: 'hash',
        render: (text) => {
          return (<div style={{ maxWidth: "400px", overflow: "hidden" }}>
            {text}
          </div>)
        }
      },
      {
        title: '前一哈希',
        dataIndex: 'previousHash',
        key: 'previousHash',
        render: (text) => {
          return (<div style={{ maxWidth: "400px", overflow: "hidden" }}>
            {text}
          </div>)
        }
      },
      {
        title: '区块时间',
        dataIndex: 'timestamp',
        key: 'timestamp',
        render: (text) => {
          return (<div style={{ minWidth: "200px" }}>{moment(text).format("YYYY-MM-DD HH:mm")}</div>)
        }
      },
      {
        title: '数据',
        dataIndex: 'data',
        key: 'data',
        render: (text) => {
          return (<div style={{ minWidth: "200px" }}>
            <h5>商品：{text.title}</h5>
            <h5>价格：{text.price} 元</h5>
            <h5>出售方：{text.location}</h5>
          </div>)
        }
      },
    ]
    return (
      <div className="bg">
        <Head>
          <meta name="description" content="云帧数浪 - 云市场" />
          <meta name="baidu-site-verification" content="jdx62mQhIl" />
          <title>芳兵的项目</title>
        </Head>

        <Row>
          <Table columns={columns} dataSource={this.items} />
        </Row>
      </div>
    );
  }
}

export default Market;
