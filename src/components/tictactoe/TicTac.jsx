import { useEffect, useRef, useState } from "react";

const size = 3;

const TicTac = () => {
  const [arr, setArr] = useState(new Array(size * size).fill(null));
  const [clickXorY, setClickXorY] = useState("X");
  const [winner, setWinner] = useState(null);
  const buttonRef = useRef([]);

  const checkWinner = (arr) => {
    const lines = [
      [0, 4, 8],
      [2, 4, 6], // diagonals
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
    ];
    for (let [a, b, c] of lines) {
      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) return arr[a];
    }
    return null;
  };

  const handleClick = (id) => {
      if (arr[id]==="X" || arr[id] === "O" || winner) return;
      console.log([...arr])
    const newArr = [...arr];
    newArr[id] = clickXorY;

    setArr(newArr);
    setClickXorY((prev) => {
      if (prev === "X") return "O";
      return "X";
    });
  };

  useEffect(() => {
    const result = checkWinner(arr);
    if (result) {
      setWinner(result);
    } else if (arr.every((cell) => cell)) {
      setWinner("Tie");
    }
  },[arr]);

  const handleReset = () => {
    setClickXorY("X");
    setArr(new Array(size * size).fill(null));
    setWinner(null);
  };

  return (
    <div>
      <h2>Tic Tac Toe Game!</h2>
      <div style={{ marginBottom: "10px" }}>
        {winner ? (
          <strong>
            {winner === "Tie" ? "It's a Tie!" : `Winner: ${winner}`}
          </strong>
        ) : (
          `Next Turn: ${clickXorY}`
        )}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${size}, 50px)`,
          gap: "5px",
        }}
      >
        {[...arr.keys()].map((n) => {
          return (
            <div key={n + 1}>
              <button
                onClick={() => handleClick(n)}
                style={{ height: "50px", width: "50px", fontSize: "20px" }}
                ref={(el) => (buttonRef.current[n] = el)}
              >
                {arr[n]}
              </button>
            </div>
          );
        })}
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default TicTac;
