import { useState } from "react";
import explorer from './folderData';
import Folder from "./folder";

const ExplorerComponent = () => {

    const [explorerData, setExplorerData] = useState(explorer) 
    console.log(explorerData);

    return(
        <div>
            <Folder explorer={explorerData}/>
        </div>
    )

}


export default ExplorerComponent;