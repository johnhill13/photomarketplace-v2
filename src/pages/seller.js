import React, { Component } from "react";

import { AppContextConsumer } from "../services/appContext";
import { Card, BackTop } from "antd";

import Date from "../components/date";

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
                  <a href={seller.data.url}>Go to Reddit.</a>
                  <div key={seller.data.id}>
                    <br />
                    <div>{seller.data.selftext}</div>
                    <br />
                    <div className='type'>
                      <div>Type:</div>
                      <div>{seller.data.link_flair_text}</div>
                    </div>
                    <div className='author'>
                      <div>Author:</div>
                      <div>{seller.data.author}</div>
                    </div>
                    <Date created={seller.data.created} />
                    <div className='num-comments'>
                      <div>Num Comments:</div>
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
