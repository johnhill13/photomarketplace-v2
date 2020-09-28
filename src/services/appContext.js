import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class AppContextProvider extends Component {
  state = {
    allPosts: ["test", "tester"],
    buyers: [],
    sellers: [],
    traders: [],
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { AppContextProvider, Consumer as AppContextConsumer };
