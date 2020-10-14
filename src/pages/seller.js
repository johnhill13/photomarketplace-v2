import React, { Component } from "react";

import { AppContextConsumer } from "../services/appContext";
import { Card, BackTop } from "antd";

import Date from "../components/date";
import Image from "../components/image";
import Description from "../components/description";

import "antd/dist/antd.css";
import "../pages/seller.css";

export default class Seller extends Component {
  render() {
    return (
      <AppContextConsumer>
        {(data) => (
          <div>
            <BackTop />
            <div className="body">
              <h1>Sellers</h1>
              {data.sellers.map((seller) => (
                <Card
                  className="card"
                  key={seller.data.id}
                  hoverable
                  title={seller.data.title}
                >
                  <Image data={seller.data.selftext} />
                  <a
                    href={seller.data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to Reddit.
                  </a>
                  <div key={seller.data.id}>
                    <br />
                    <Description text={seller.data.selftext} />
                    <br />
                    <div className="type">
                      <div className="type-title">Type:</div>
                      <div>{seller.data.link_flair_text}</div>
                    </div>
                    <div className="author">
                      <div className="author-title">Author:</div>
                      <div>{seller.data.author}</div>
                    </div>
                    <Date created={seller.data.created} />
                    <div className="num-comments">
                      <div className="num-comments-title">Num Comments:</div>
                      <div>{seller.data.num_comments}</div>
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
