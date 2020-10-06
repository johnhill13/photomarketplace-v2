import React, { Component } from "react";

import { AppContextConsumer } from "../services/appContext";

import "antd/dist/antd.css";
import { Row, Card } from "antd";


export default class Seller extends Component {
  render() {
    return (
      <AppContextConsumer>
          {(data) => 
        <div>
          <Row>
            <div>
              {data.sellers.map((buyer) => (
                <Card
                  hoverable
                  title={buyer.data.title}
                  extra={<a href={buyer.data.url}>Original Post</a>}
                >
                  <div key={buyer.data.id}>
                    <div>{buyer.data.selftext}</div>
                    <div>{buyer.data.link_flair_text}</div>
                    <div>{buyer.data.author}</div>
                  </div>
                </Card>
              ))}
            </div>
          </Row>
        </div>
  }
      </AppContextConsumer>
    );
  }
}
