import React, { Component } from "react";
import { Row, Col, Card, Button, Tabs, Modal } from "antd";
import Head from "next/head";
import '../style/index.css';
const { TabPane } = Tabs;

const ITEMS = [
  { title: "可口可乐", price: 4, location: "园区商店", image: "/static/images/cola.png" },
  { title: "乐事薯片", price: 12, location: "园区商店", image: "/static/images/leshi.png" },
  { title: "利群烟", price: 19, location: "园区商店", image: "/static/images/liqun.png" },
  { title: "农夫山泉", price: 3, location: "园区商店", image: "/static/images/water.png" },
]
class Market extends Component {
  state = {
    visible: false,
    currentImage: "",
  }
  buy = async (buyer, item) => {
    let data = Object.assign({}, item, { buyer });
    try {
      let res = await fetch("/api/buy", {
        method: "POST",
        credentials: "include",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });
      if (res) {
        let back = await res.json();
        this.setState({
          visible: true,
          currentImage: item.image
        });
      } else {
        console.error("服务器无响应")
      }
    } catch (e) {
      console.error(e.toString())
    }
  }

  callback = (key) => {
    console.log(key);
  }

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };


  render() {
    return (
      <div className="bg">
        <Head>
          <meta name="description" content="云帧数浪 - 云市场" />
          <meta name="baidu-site-verification" content="jdx62mQhIl" />
          <title>虚拟工业园区</title>
        </Head>
        <div className="head">
          <Row>
            <Col lg={4}>
              <a href="/blockchain" target="_blank">区块链后台</a>
            </Col>
            <Col lg={16}>
              <center>
                虚拟工业园区
              </center>
            </Col>
            <Col lg={4}>账户总金额：821,233元</Col>
          </Row>
        </div>
        <Tabs onChange={this.callback} type="card">
          <TabPane tab="园区商店" key="1">
            <Row>
              {ITEMS.map(item => (
                <Col span={6} key={item.title} style={{ padding: 20 }}>
                  <Card className="card-style">
                    <center>
                      <img src={item.image} alt="logo" style={{ height: "140px", marginBottom: "20px" }} />
                    </center>
                    <h3>{item.title}</h3>
                    <h4>{item.price}元</h4>
                    <Button type="primary" onClick={() => this.buy("self", item)}>购买</Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </TabPane>
          <TabPane tab="园区加油站" key="2">
            Content of Tab Pane 2
    </TabPane>
          <TabPane tab="园区停车场" key="3">
            Content of Tab Pane 3
    </TabPane>
        </Tabs>
        <Modal title="完成出货"
          visible={this.state.visible}
          footer={null}
          onOk={this.handleOk}
          onCancel={this.handleCancel}>
          <center>
            <img src={this.state.currentImage} style={{ height: "140px", marginBottom: "20px" }} />
            <h3>购买成功</h3>
          </center>

        </Modal>

      </div>
    );
  }
}

export default Market;
