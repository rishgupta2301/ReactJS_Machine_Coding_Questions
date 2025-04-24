import { useState } from "react"

const CommentSection = ({initialComments}) => {

    const [input, setInput] = useState("");
    const [comments, setComments] = useState(initialComments);

    const handleSubmit = (e, id) => {
        const newState = [...comments, {id:Date.now(), desc:input}];
        console.log(newState)
        setComments(newState);

    }
    

    return (
        <div>
            <div style={{display:"flex"}}>
                <textarea value={input}  onChange={(e) => setInput(e.target.value)}/>
                <button  onClick={(e, id) => handleSubmit(e, id)}>Submit</button>
            </div>
            <div style={{marginLeft:"40px"}}>
                {comments.map((item) => {
                    return(
                        <>
                            <div  key={item.id}>⎆{item.desc}</div>
                            {item.replies && <CommentSection initialComments={item.replies} />}
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default CommentSection