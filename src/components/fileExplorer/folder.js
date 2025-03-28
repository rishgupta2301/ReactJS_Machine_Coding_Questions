import { useState } from "react";
import '../fileExplorer/styles.css'

const Folder = ({ handleInsertNode, explorer }) => {
  console.log(explorer);

    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null,
    });

    const handleNewFolder=(e, isFolder)=>{ // this will stop the functionality of opening the drop down 
        //to show other files when(we need it as the buttons are present inside the div)
        e.stopPropagation();
        setExpand(true)
        setShowInput({
            visible: true,
            isFolder,
        })

    }

    const onAddFolder = (e) => {
        if(e.keyCode === 13 && e.target.value){
            handleInsertNode(explorer.id, e.target.value, showInput.isFolder) //folder.id , item , isFolder
            setShowInput({...showInput, visible: false});
        }
    }

  if(explorer.isFolder) {
  return (
    <div style={{ marginTop: 5 }}>
      <div className="folder" style={{cursor:"pointer"}} onClick={() => setExpand(!expand)}>
        <span >🗂️ {explorer.name}</span>
        <div>
            {/* below true is for folder and false is for not folder i.e., file */}
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button> 
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
        </div>
      </div>
      <div style={{display: expand ? 'block' : 'none', paddingLeft:25}}>
        {showInput.visible && (
            <div className="inputContainer">
                <span>{showInput.isFolder ? '🗂️' :'📄'}</span>
                <input 
                onKeyDown={onAddFolder}
                type="text"
                className="inputContainer__input" 
                onBlur={() => setShowInput({...showInput, visible:false})} // it will close the input field if clicked outside
                autoFocus
                />
            </div>
        )}
        {explorer.items.map((item) => {
            return (
                // <span>📄 {item.name}</span>
                <Folder handleInsertNode = {handleInsertNode} explorer={item} key={item.id}/>
            )
        })}
      </div>
    </div>
  );
} 
else{
    return <span className="file">📄 {explorer.name}</span>
}
};

export default Folder;
