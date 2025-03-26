// LINK FOR QUESTION:
// https://www.linkedin.com/posts/shubham-soni-374a86175_connections-softwareengineer-linkedin-ugcPost-7310516091108081664-3GTr?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC3mmWYBgNfHKaXJqxn9d84OlSeQ5DUGTm8

import { useState } from "react";
import "./progress.css";

const ProgressBar = (props) => {
  const [arr, setArr] = useState([...new Array(0)]);
  const timer = props.timer;

  return (
    <div className="container">
      <div className="btns">
        <button
          className="clickme"
          onClick={() => setArr([...arr, ...new Array(1)])}
        >
          Click Me
        </button>
        <button className="reset" onClick={() => setArr([...new Array(0)])}>
          Reset
        </button>
        <p>{timer}</p>
      </div>
      <ul>
        {arr.map((el, idx) => {
          return (
            <li
              key={idx}
              style={{ animation: `bg-transition ${timer} forwards` }}
            >
              {idx + 1}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProgressBar;
