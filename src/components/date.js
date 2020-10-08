import React from "react";

function date(props) {
  const date = props.created;

  const mutateDate = (date) => {
    const newDate = date * 1000;
    const convertDate = new Date(newDate);

    return <div className="converted-date">{`${convertDate}`}</div>;
  };

  return (
    <div className="posted">
      <div>Posted: </div>
      {mutateDate(date)}
    </div>
  );
}

export default date;
