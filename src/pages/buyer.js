import React, { Component } from "react";

import { AppContextConsumer } from "../services/appContext";
import { Card, BackTop } from "antd";

import "antd/dist/antd.css";
import "../pages/seller.css";

export default class Buyer extends Component {
  render() {
    return (
      <AppContextConsumer>
        {(data) => (
          <div>
            <BackTop />
            <div className="body">
              <h1>Buyers</h1>
              {data.buyers.map((buyer) => (
                <Card
                  className="card"
                  key={buyer.data.id}
                  hoverable
                  title={buyer.data.title}
                >
                  <a href={buyer.data.url}>Original Post</a>
                  <div key={buyer.data.id}>
                    <div> Description: {buyer.data.selftext}</div>
                    <div> Type: {buyer.data.link_flair_text}</div>
                    <div> Author: {buyer.data.author}</div>
                    <div>Date Created: {() => {}}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </AppContextConsumer>
    );
  }
}
