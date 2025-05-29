import React, { useState } from 'react';
function ChipsInput() {

  const [chipVal, setChipVal] = useState('');
  const [chips, setChips] = useState([]);

  const handleSubmit = () => {
    console.log(chips)
    if (chipVal.trim().length === 0) return;
    const newState = [...chips, chipVal.trim()];
    setChips(newState);
    setChipVal("");
  }

  const handleDelete = (el) => {
    console.log(chips);
    const newState = chips.filter((item) => item !== el.trim());
    setChips(newState);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "40px 0" }}>
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        value={chipVal}
        onChange={(e) => setChipVal(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSubmit();
          }
        }}
      />
      <div style={{ display: "flex", gap: "10px" }}>
        {chips && chips.map((el, idx) => {
          return (
            <>
              <p key={idx} style={{ padding: "8px", backgroundColor: "grey", borderRadius: "30px", color: "white" }}>{el}
                <button
                  onClick={() => handleDelete(el)}
                  style={{ marginLeft: "10px", color: "red" }} >X</button>
              </p>
            </>
          )
        })}
      </div>
    </div>
  );
}

export default ChipsInput;