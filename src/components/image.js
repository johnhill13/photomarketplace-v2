import React from "react";

function image(props) {
  const data = props.data;

  function replaceURLWithImgLinks(text) {
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    
    return text.replace(exp, `<img src='$1' alt='test' className='image' />`);
  }

  const findSrc = (data) => {
    {
      replaceURLWithImgLinks(data);
    }
  };
  return <div>{findSrc(data)}</div>;
}

export default image;
