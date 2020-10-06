import React, { Component } from "react";

import { AppContextConsumer} from "../services/appContext";

export default class Buyer extends Component {
  render() {
    return (
      <AppContextConsumer>
        {(data) => <div>{data.buyers}</div>}
      </AppContextConsumer>
    );
  }
}
