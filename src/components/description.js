import React from "react";
import Linkify from "react-linkify";

function description(props) {
  const text = props.text;

  // something to take text and create <a> links for websites

  return (
    <Linkify>
      <div className="desc-test">{text}</div>
    </Linkify>
  );
}

export default description;
