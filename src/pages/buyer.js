import React, { Component } from "react";

import { AppContextConsumer } from "../services/appContext";

import "antd/dist/antd.css";
import { Row, Card } from "antd";

export default class Buyer extends Component {
  render() {
    return (
      <AppContextConsumer>
        {(data) => (
          <div>
            <Row>
              <div>
                {data.buyers.map((buyer) => (
                  <Card
                    key={buyer.data.id}
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
        )}
      </AppContextConsumer>
    );
  }
}
