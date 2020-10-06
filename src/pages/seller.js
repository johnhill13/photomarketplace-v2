import React, { Component } from "react";

import { AppContextConsumer} from "../services/appContext";

export default class Seller extends Component {
  render() {
    return (
      <AppContextConsumer>
        {(data) => <div>{data.sellers}</div>}
      </AppContextConsumer>
    );
  }
}
