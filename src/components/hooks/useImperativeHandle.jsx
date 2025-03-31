// THIS HOOK IS USED TO PASS FROM CHILD TO PARENT

import { useImperativeHandle, useRef, useState } from "react"

const FancyInput = ({ref}) => {

    const [inputVal, setInputVal] = useState('');
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => (
        {
            focus: () => {
                inputRef.current.focus();
            },
            clear: () => {
                inputRef.current.blur();
            }
        }
    ))

    return(
        <>
            <input
            type="text"
            placeholder="Type something bruh!!"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            ref={inputRef}
            />
            <p>You typed: {inputVal}</p>
        </>
    )
}

export default FancyInput