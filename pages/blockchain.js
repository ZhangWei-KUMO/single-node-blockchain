import React, { Component } from "react";
import { Row, Table, Col } from "antd";
import Head from "next/head";
import { observer } from "mobx-react";
import { observable } from "mobx";
import moment from "moment";
import '../style/index.css';

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
        className: "colu",
        title: '哈希值',
        dataIndex: 'hash',
        key: 'hash',
        render: (text) => {
          return (<div style={{ maxWidth: "300px", overflow: "hidden" }}>
            {text}
          </div>)
        }
      },
      {
        className: "colu",
        title: '前一哈希',
        dataIndex: 'previousHash',
        key: 'previousHash',
        render: (text) => {
          return (<div style={{ maxWidth: "300px", overflow: "hidden" }}>
            {text}
          </div>)
        }
      },
      {
        className: "colu",
        title: '区块时间',
        dataIndex: 'timestamp',
        key: 'timestamp',
        render: (text) => {
          return (<div style={{ minWidth: "200px" }}>{moment(text).format("YYYY-MM-DD HH:mm")}</div>)
        }
      },
      {
        className: "colu",
        title: '数据',
        dataIndex: 'data',
        key: 'data',
        render: (text) => {
          return (<div style={{ minWidth: "200px" }}>
            <h5 style={{ color: "#fff" }}>商品：{text.title}</h5>
            <h5 style={{ color: "#fff" }}>价格：{text.price} 元</h5>
            <h5 style={{ color: "#fff" }}>出售方：{text.location}</h5>
          </div>)
        }
      },
    ]
    return (
      <div style={{ background: "#000" }}>
        <Head>
          <meta name="description" content="云帧数浪 - 云市场" />
          <meta name="baidu-site-verification" content="jdx62mQhIl" />
          <title>区块链后台</title>
        </Head>
        <div className="head">
          <Row>
            <Col lg={4}>
              <a href="/" target="_blank">
                <center>
                  <img src="/static/images/back.jpg" height={50} />
                </center>
              </a>
            </Col>
            <Col lg={16}>
              <center>
                <img src="/static/images/logo-2.jpg" height={100} />
              </center>
            </Col>
            <Col lg={4}>
              <center>
                <img src="/static/images/account.jpg" height={50} />
              </center>
            </Col>
          </Row>
        </div>

        <div style={{ width: "80%", margin: "60px auto" }}>
          <Table columns={columns} dataSource={this.items} className="no-hover" />
        </div>
      </div>
    );
  }
}

export default Market;
