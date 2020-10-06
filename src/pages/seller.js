import React, { Component } from "react";

import { AppContextConsumer } from "../services/appContext";

import "antd/dist/antd.css";
import { Row, Card } from "antd";

export default class Seller extends Component {
  render() {
    return (
      <AppContextConsumer>
        {(data) => (
          <div>
            <Row>
              <div>
                {data.sellers.map((seller) => (
                  <Card
                    key={seller.data.id}
                    hoverable
                    title={seller.data.title}
                    extra={<a href={seller.data.url}>Original Post</a>}
                  >
                    <div key={seller.data.id}>
                      <div>{seller.data.selftext}</div>
                      <div>{seller.data.link_flair_text}</div>
                      <div>{seller.data.author}</div>
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
