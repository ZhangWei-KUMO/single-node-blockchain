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
];

const ITEMS_2 = [
  { title: "92#汽油", price: 38, location: "园区加油站", image: "/static/images/oil.png" },
  { title: "95#汽油", price: 41, location: "园区加油站", image: "/static/images/oil.png" },
  { title: "0#柴油", price: 50, location: "园区加油站", image: "/static/images/oil.png" },
  { title: "98#汽油", price: 40, location: "园区加油站", image: "/static/images/oil.png" },
];

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
              <a href="/blockchain" target="_blank">
                <center>
                  <img src="/static/images/enter.jpg" height={50} />
                </center>
              </a>
            </Col>
            <Col lg={16}>
              <center>
                <img src="/static/images/logo.jpg" height={100} />
              </center>
            </Col>
            <Col lg={4}>
              <center>
                <img src="/static/images/account.jpg" height={50} />
              </center>
            </Col>
          </Row>
        </div>
        <div className="container">
          <Row>
            {ITEMS.map(item => (
              <Col span={6} key={item.title} style={{ padding: 10 }}>
                <Card className="card-style">
                  <center>
                    <img src={item.image} alt="logo" style={{ height: "140px", marginBottom: "20px" }} />
                  </center>
                  <Row>
                    <Col lg={12}>
                      <h3>{item.title}</h3>
                      <h4>{item.price}元</h4>
                      <Button type="primary" onClick={() => this.buy("self", item)}>立即购买</Button>
                    </Col>
                    <Col lg={12}>
                      <img src="/static/images/qrcode.png" width={80} style={{ float: "right" }} />
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>

          {ITEMS_2.map(item => (
            <Col span={6} key={item.title} style={{ padding: 10 }}>
              <Card className="card-style">
                <center>
                  <img src={item.image} alt="logo" style={{ height: "140px", marginBottom: "20px" }} />
                </center>
                <Row>
                  <Col lg={12}>
                    <h3>{item.title}</h3>
                    <h4>{item.price}元/升</h4>
                    <Button type="primary" onClick={() => this.buy("self", item)}>加油</Button>
                  </Col>
                  <Col lg={12}>
                    <img src="/static/images/qrcode.png" width={80} style={{ float: "right" }} />
                  </Col>
                </Row>

              </Card>
            </Col>
          ))}
        </div>
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
