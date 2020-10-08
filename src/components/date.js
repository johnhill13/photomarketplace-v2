import React from "react";

function date(props) {
  const date = props.created;

  const mutateDate = (date) => {
    console.log(date);
    // convert UTC 1601873010 into hours ago

    const unixTime = Math.floor(Date.now() / 1000);
    const difference = unixTime - date;

    const minutesAgo = Math.floor(difference / 60);
    // const hoursAgo = Math.floor(minutesAgo / );

    return <div>{minutesAgo}</div>;
  };
  return <div>Created: {mutateDate(date)}</div>;
}

export default date;
