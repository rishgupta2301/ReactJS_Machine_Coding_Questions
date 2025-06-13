import { useState } from "react";
import Comment from "./Comment";
import './cmntstyles.css';
import useNode from "./useNode";

const comments = {
    id:1,
    items:[],
}


const AllComments = () => {

    const [commentsData, setCommentsData] = useState(comments);
    const {insertNode, editNode, deleteNode} = useNode();

    const handleInsertNode = (folderId, item) => {
        const finalStruct = insertNode(commentsData, folderId, item);
        setCommentsData(finalStruct);
    }

    const handleEditNode = (folderId, value) => {
        const finalStruct = editNode(commentsData, folderId, value);
        setCommentsData(finalStruct);
    }

    const handleDeleteNode = (folderId) => {
        const finalStruct = deleteNode(commentsData, folderId);
        const temp = {...finalStruct};
        setCommentsData(temp);
    }
    

    return(
        <div>
            <Comment 
            comment={commentsData}
            handleInsertNode = {handleInsertNode}
            handleEditNode = {handleEditNode}
            handleDeleteNode = {handleDeleteNode}
            />
        </div>
    )
}

export default AllComments;