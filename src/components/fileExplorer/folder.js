import { useState } from "react";
import '../fileExplorer/styles.css'

const Folder = ({ explorer }) => {
  console.log(explorer);

    const [expand, setExpand] = useState(false);

  if(explorer.isFolder) {
  return (
    <div style={{ marginTop: 5 }}>
      <div className="folder" style={{cursor:"pointer"}} onClick={() => setExpand(!expand)}>
        <span >🗂️ {explorer.name}</span>
      </div>
      <div style={{display: expand ? 'block' : 'none', paddingLeft:25}}>
        {explorer.items.map((item) => {
            return (
                // <span>📄 {item.name}</span>
                <Folder explorer={item} key={item.id}/>
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
