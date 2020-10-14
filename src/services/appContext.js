import React, { Component } from "react";
import axios from "axios";

const { Provider, Consumer } = React.createContext();

class AppContextProvider extends Component {
  state = {
    allPosts: [],
    buyers: [],
    sellers: [],
    traders: [],
    isLoading: false,
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    axios
      .get(`https://www.reddit.com/r/photomarket.json?limit=100`)
      .then((res) => {
        const allPosts = res.data.data.children;
        this.setState({ allPosts: allPosts });
        this.buyerOrSeller();
      });
  };

  buyerOrSeller = () => {
    for (let i = 0; i < this.state.allPosts.length; i++) {
      if (this.state.allPosts[i].data.link_flair_text === "SELLING") {
        this.setState({
          sellers: [...this.state.sellers, this.state.allPosts[i]],
        });
      } else if (this.state.allPosts[i].data.link_flair_text === "BUYING") {
        this.setState({
          buyers: [...this.state.buyers, this.state.allPosts[i]],
        });
      }
    }
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { AppContextProvider, Consumer as AppContextConsumer };
