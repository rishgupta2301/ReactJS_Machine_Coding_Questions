import { useEffect, useState } from "react";
import './countdownTimer.css'

const CountdownTimer = () => {

    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const [startTimer, setStartTimer] = useState("not_started");
    const [pause, setPause] = useState("");
    
    useEffect(() => {
        const timeInterval = setTimeout(() => {
            runTimer();
        }, 1000);
        return () => clearInterval(timeInterval);
    })

    const runTimer = () => {
        if(pause !== "pause" && pause!==""){
            if(sec > 0)setSec(sec-1);
            else if(min > 0 && sec === 0){
                setMin(min-1);
                setSec(59);
            }
            else {
                setHour(hour-1);
                setMin(59);
                setSec(59);
            }
        }
        if(hour === 0 && min === 0 && sec === 0 && pause === 'play' && 
            startTimer === "timer_started"
        ) {
            window.alert('Time is up!');
            handleReset();
        }

    }

    const handleTimer = () => {
        if (sec === 0 && min === 0 && hour === 0) {
            alert("Please set the timer");
            return;
          } else {
            setStartTimer("timer_started");
            setPause("play");
          }
    }

    const handlePause = () => {
        setPause("pause")
    }

    const handleReset = () => {
        setSec(0);
        setMin(0);
        setHour(0);
        setPause("");
        setStartTimer("not_started");
      };

    return(
        <>
      {startTimer === "timer_started" ? (
        <>
        <span>{hour < 10 ? `0${hour}` : hour}</span>:
        <span>{min < 10 ? `0${min}` : min}</span>:
        <span>{sec < 10 ? `0${sec}` : sec}</span>
        {pause === 'pause' ? (
            <button className="start btns" onClick={handleTimer}>Start</button>
        ) : (
            <button className="pause btns" onClick={handlePause}>Pause</button>
        ) }
        <button className="reset btns" onClick={handleReset}>Reset</button>
        </>
      ) : (
        <div className="container">
            <div className="inputs">

            
          <input
            type="number"
            placeholder="HH"
            name="hour"
            onChange={(e) => setHour(e.target.value)}
          />
          <input
            type="number"
            placeholder="MM"
            name="min"
            onChange={(e) => setMin(e.target.value)}
          />
          <input
            type="number"
            placeholder="SS"
            name="sec"
            onChange={(e) => setSec(e.target.value)}
          />
          </div>
          <div>

            <button className="start btns" onClick={handleTimer}>Start</button>
          </div>
        </div>
      )}
    </>
    )
}


export default CountdownTimer;