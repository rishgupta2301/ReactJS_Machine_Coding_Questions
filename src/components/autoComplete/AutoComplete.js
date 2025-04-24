import { useEffect, useState } from "react";
import './autoComplete.css'

const AutoComplete = () => {

    const [input, setInput] = useState("")
    const [data, setData] = useState([]);
    const [showRes, setShowRes] = useState(false)

    function debounce(func, delay){
        let timeoutId = null;

        return function(...args){
            clearTimeout(timeoutId); // if the user types in between the delay then the timout will get cleared and will be updated back to the original delay in the below line of code
            timeoutId= setTimeout(() => func(args), delay);
        }
    }

    useEffect(() => {
        const fetchData = async() => {
            const result = await fetch(`https://dummyjson.com/recipes/search?q=${input}`)
            .then((res) => res.json());
            console.log(result)
            setData(result?.recipes)
        }

        const debouncedFetchData = debounce(fetchData, 2000);

        input && debouncedFetchData();

        return () => {}
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