import { useRef, useState } from "react"

const size = 3;


const TicTac = () => {

    const [arr, setArr] = useState(new Array(size*size));
    const [lastClicked, setLastClicked] = useState("X");
    const buttonRef = useRef([]);

    const handleClick = (id) => {
        if(arr[id]) return;
        const newArr = [...arr];
        newArr[id] = lastClicked;
        setArr(newArr);
        setLastClicked((prev) => {
            if(prev === "X")return "O";
            return "X";
        })
    }

    return(
        <div>
            <h2>Tic Tac Toe Game!</h2>
            <div style={{display:"grid", gridTemplateColumns:`repeat(${size}, 50px)`, gap:"5px"}}>
                {arr.keys().map((n) => {
                    return(
                        <div key={n+1}>
                            <button onClick={() => handleClick(n)} style={{height:"50px", width:"50px", fontSize:"20px"}}
                            ref={(el) => buttonRef.current[n] = el}>
                                {arr[n]}
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TicTac