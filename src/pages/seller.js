import React, { Component } from "react";

import { AppContextConsumer } from "../services/appContext";
import { Card, BackTop } from "antd";

import Date from '../components/date'

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
                    <div> Description: {seller.data.selftext}</div>
                    <br />
                    <div> Type: {seller.data.link_flair_text}</div>
                    <div> Author: {seller.data.author}</div>
                    <Date created={seller.data.created}/>
                    <div>Num Comments: {seller.data.num_comments}</div>
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
