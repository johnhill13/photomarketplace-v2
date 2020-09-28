import React from "react";
import { AppContextConsumer } from "../services/appContext";

export default function home() {
  return (
    <AppContextConsumer>
      {(context) => <div>{context.allPosts}</div>}
    </AppContextConsumer>
  );
}
