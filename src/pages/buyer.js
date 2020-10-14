import React, { Component } from "react";

import { AppContextConsumer } from "../services/appContext";
import { Card, BackTop } from "antd";

import Date from "../components/date";

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
                  <a
                    href={buyer.data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to Reddit.
                  </a>
                  <div key={buyer.data.id}>
                    <br />
                    <div>{buyer.data.selftext}</div>
                    <br />
                    <div className="type">
                      <div className="type-title">Type:</div>
                      <div>{buyer.data.link_flair_text}</div>
                    </div>
                    <div className="author">
                      <div className="author-title">Author:</div>
                      <div>{buyer.data.author}</div>
                    </div>
                    <Date created={buyer.data.created} />
                    <div className="num-comments">
                      <div className="num-comments-title">Num Comments:</div>
                      <div>{buyer.data.num_comments}</div>
                    </div>
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
