import { useState } from "react";
import explorer from './folderData';
import Folder from "./folder";
import useTraverseTree from "./use-traverse-tree";

const ExplorerComponent = () => {

    const [explorerData, setExplorerData] = useState(explorer) 
    const {insertNode} = useTraverseTree()

    const handleInsertNode = (folderId, item, isFolder) => {
        const finalTree = insertNode(explorerData, folderId, item, isFolder);

        setExplorerData(finalTree)
    }

    return(
        <div>
            <Folder handleInsertNode={handleInsertNode} explorer={explorerData}/>
        </div>
    )

}


export default ExplorerComponent;