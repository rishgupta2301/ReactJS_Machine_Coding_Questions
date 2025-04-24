import { useState } from "react";

const QuesAns = ({ item, idx, isShow, setIsShow }) => {
  return (
    <div
      style={{ border: "1px solid black", marginBottom: "5px" }}
      onClick={() => {
        return setIsShow(idx);
      }}
    >
      <h5>{item.question}</h5>
      {isShow === idx && <p>{item.answer}</p>}
    </div>
  );
};

const FAQ = ({ data }) => {
  const [isShow, setIsShow] = useState(0);

  return (
    <div>
      <h3>FAQ</h3>
      {data.map((item, idx) => {
        return (
          <QuesAns
            key={idx}
            idx={idx}
            item={item}
            isShow={isShow}
            setIsShow={setIsShow}
          />
        );
      })}
    </div>
  );
};

export default FAQ;
