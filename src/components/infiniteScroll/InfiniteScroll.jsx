import React, { useEffect, useState } from "react";
import "./scroll.css";

const InfiniteScroll = () => {
  const [data, setData] = useState([...new Array(40)]);
  const [loading, setLoading] = useState(false);

  function handleScroll(event) {
    // height scrolled over above the client height
    const scrollTop = event.target.scrollTop;
    // client height that is the height of the div
    const clientHeight = event.target.clientHeight;
    // total height that is to be scrolled i.e., clientHeight + remainingHeight to be scrolled
    const scrollHeight = event.target.scrollHeight;

    const remainingScroll = scrollHeight - (scrollTop + clientHeight);

    if (remainingScroll < 50) {
      //   setLoading(true);
      !loading && loadmore();
    }
  }

  function loadmore() {
    setLoading(true);
    setTimeout(() => {
      setData([...data, ...new Array(10)]);
      setLoading(false);
    }, 1000);
  }

  return (
    <div onScroll={handleScroll} className="container">
      <ul>
        {data.map((row, index) => {
          return (
            <li key={index} className="row">
              {index + 1}
            </li>
          );
        })}
      </ul>
      {loading && <p style={{textAlign:"center"}} >Loading ...</p>}
    </div>
  );
};
export default InfiniteScroll;
