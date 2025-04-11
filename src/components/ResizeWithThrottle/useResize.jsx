import { useEffect, useState } from "react"

const getScreentype = (width) => {
    
    if(width < 768)return "Mobile";
    else if(width > 768 && width < 1024)return "Tablet";
    else return "Desktop";
}

const throttle = (func, delay) => {
    let lastcall = 0;

    return () => {
        const now = new Date().getTime();
        if(now-lastcall >= delay){
            lastcall = now;
            func();
        }
    }
}

const useResize = (width) => {
    const [screenType, setScreenType] = useState(getScreentype(window.innerWidth));
    
    useEffect(() => {
        // let lastrun=0;

    const handleResize = () => {
        // const now = new Date().getTime();

        // if(now-lastrun >= 2000){
        //     lastrun = now
            setScreenType(width ? getScreentype(width) : getScreentype(window.innerWidth));
        // }
    }
    const throttledResize = throttle(handleResize, 2000);
    window.addEventListener('resize', throttledResize);

        return () => window.removeEventListener('resize', throttledResize);
    },[width])
    
    console.log("sssss, ",{screenType})
    return screenType;
}

export default useResize