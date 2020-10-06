import React from "react";
import { AppContextConsumer } from "../services/appContext";

export default function home() {
  return (
    <AppContextConsumer>
      {(data) => <div>{data.allPosts}</div>}
    </AppContextConsumer>
  );
}
