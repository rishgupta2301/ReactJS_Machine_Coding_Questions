import { useEffect, useRef, useState } from "react";
import "./validOtpstyles.css"

const Otp_Digits = 6;

const ValidOtp = (props) => {
    const {total_digits} = props;

    const [inputArr, setInputArr] = useState(new Array(total_digits ? total_digits : Otp_Digits).fill(""));
    const refArr = useRef([]);

    useEffect(() => {
        refArr.current[0]?.focus();
    },[])


    const handleChange = (value, index) => {

        if(isNaN(value))return; //if user has eneterd spaces 

        const newVal = value.trim().slice(-1); // remove trailing spaces and keep only the last digit of whatever number entered
        const newArr = [...inputArr];
        newArr[index] = newVal;
        setInputArr(newArr)
        value && refArr.current[index + 1]?.focus();
    }

    const handleKeyPress = (e, index) =>{
        // console.log(e)
        if (e.key === "Backspace") {
            if (inputArr[index]) {
                // Delete the current value
                const newArr = [...inputArr];
                newArr[index] = "";
                setInputArr(newArr);
            } else if (index > 0) {
                // Move focus to the left if empty
                refArr.current[index - 1]?.focus();
            }
        }
        else if (e.key === "ArrowLeft" && index > 0) {
            refArr.current[index - 1]?.focus();
        } else if (e.key === "ArrowRight" && index < Otp_Digits - 1) {
            refArr.current[index + 1]?.focus();
        }

    }

    return(
        <div>
            <h1>Validate OTP</h1>
            {inputArr.map((input, index) => {
                return <input 
                className="otp-input"
                value={inputArr[index]}
                type="text"
                key={index}
                onChange={(e) => handleChange(e.target.value, index)}
                ref={(input) => (refArr.current[index] = input)}
                onKeyDown={(e) => handleKeyPress(e,index)}
                />
            })}
        </div>
    )
}

export default ValidOtp