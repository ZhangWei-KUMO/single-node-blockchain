import React, { Component } from "react";
import { Row, Col, Card, Button } from "antd";
import Head from "next/head";

const ITEMS = [
  { title: "可口可乐", price: 4, location: "工厂一号店" },
  { title: "口水鸡", price: 42, location: "吴芬餐厅" },
  { title: "宫保鸡丁", price: 31, location: "工厂二食堂" },
  { title: "利群烟", price: 12, location: "工厂一号店" },
  { title: "矿泉水", price: 3, location: "工厂一号店" },
]
class Market extends Component {

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
        console.log(back)
      } else {
        console.error("服务器无响应")
      }
    } catch (e) {
      console.error(e.toString())
    }
  }
  render() {
    return (
      <div className="bg">
        <Head>
          <meta name="description" content="云帧数浪 - 云市场" />
          <meta name="baidu-site-verification" content="jdx62mQhIl" />
          <title>芳兵的项目</title>
        </Head>

        <Row>
          {ITEMS.map(item => (
            <Col span={6} key={item.title}>
              <Card>
                <h2>{item.title}</h2>
                <Button type="primary" onClick={() => this.buy("self", item)}>购买</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Market;
