/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import './autoComplete.css'

const AutoComplete = () => {

    const [input, setInput] = useState("")
    const [data, setData] = useState([]);
    const [showRes, setShowRes] = useState(false)
    const [cache, setCache] = useState({})
    

    const fetchData = async() => {
        if(cache[input]){
            console.log("hasdata: ",input);
            setData(cache[input]);
            return;
        } 
        console.log("API calls: ",input)
        const result = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
        const jsonRes = await result.json();
        setData(jsonRes?.recipes);
        setCache(prev => ({...cache, [input]:jsonRes?.recipes}))
    }

    // debouncing
    useEffect(() => {
        const timer = setTimeout(fetchData, 300);

        return () => {
            clearTimeout(timer);
        }
    },[input])

    return(
        <div className="container" style={{display:"flex", flexDirection:"column", width:"60%", border:"1px solid black"}}>
            <input onFocus={() => setShowRes(true)} onBlur={() => setShowRes(false)} style={{height:"40px", textAlign:"center", fontSize:"25px"}} value={input} placeholder="Type here..." onChange={(e) => setInput(e.target.value)} />
            {showRes && <div className="item-container" style={{textAlign:"center"}}>
                {data.map((item) => {
                    return(
                        <p className="item" style={{ cursor:"pointer"}} key={item.id} >{item.name}</p>
                    )
                })}
            </div>}
        </div>
    )
}

export default AutoComplete;