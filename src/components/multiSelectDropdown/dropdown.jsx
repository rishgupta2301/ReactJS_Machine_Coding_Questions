import { useEffect, useRef, useState } from "react";

const listItem = [
  {
    id: 1,
    isSelected: false,
    name: "item1",
  },
  {
    id: 2,
    isSelected: false,
    name: "item2",
  },
  {
    id: 3,
    isSelected: false,
    name: "item3",
  },
  {
    id: 4,
    isSelected: false,
    name: "item4",
  },
  {
    id: 5,
    isSelected: false,
    name: "item5",
  },
  {
    id: 6,
    isSelected: false,
    name: "item6",
  },
  {
    id: 7,
    isSelected: false,
    name: "item7",
  },{
    id: 8,
    isSelected: false,
    name: "item8",
  },
  {
    id: 9,
    isSelected: false,
    name: "item9",
  },
  {
    id: 10,
    isSelected: false,
    name: "item10",
  },

];

const Dropdown = () => {
  const [items, setItems] = useState(listItem);
  const [selectedItems, setSelectedItems] = useState([])
  const [isShow, setIsShow] = useState(false);

  const containerRef = useRef(null);

  const handleChange = (e, id) => {
    // console.log(id);
    const newState = [...items];
    newState[id].isSelected = e.target.checked;
    // console.log(newState);
    setItems(newState);
    setSelectedItems(newState);
  };

  const handleRemove = (e, id) => {
    // console.log(id)
    const newState = [...items];
    newState[id].isSelected = false;
    // console.log("remove: ",newState)
    setSelectedItems(newState);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
            setIsShow(false);
          }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  },[])

  return (
    <div>
      <div className="container" ref={containerRef}  style={{display:"flex",flexDirection:"column",gap:"10px",height:"300px", width:"400px", border:"1px solid", zIndex:"100"}} 
    //   onClick={(e) => {
    //         return setIsShow(true)
    //       }}
          >
            <span style={{marginLeft:"95%"}}
            onClick={(e) => {
                return setIsShow(true)
              }}
            >🔽</span>
            <div style={{display:"flex", gap:"10px", padding:"5px", flexWrap:"wrap", maxHeight:"40%", maxWidth:"90%", marginTop:"-5%"}}>
              {selectedItems.map((item, id) => {
                return (
                  item.isSelected && (
                    <div key={id+1} style={{display:"flex",gap:"10px", justifyContent:"space-between", backgroundColor:"blue", color:"white", borderRadius:"30px", padding:"8px", fontSize:"small"}}>
                      {item.name}
                      <span style={{cursor:"pointer"}} onClick={(e) => {
                        return(
                            // e.stopPropagation() ,
                            handleRemove(e, id)

                        )
                    }
                        }>X</span>
                    </div>
                  )
                );
              })}
            </div>
            <div style={{overflow:"auto", height:"150px", zIndex:"1"}}>
              {isShow && (
                <ul style={{ listStyle: "none" }}>
                  {items.map((item, id) => {
                    return (
                      <li key={id+1}>
                        <input
                          type="checkbox"
                          checked={item.isSelected}
                          onChange={(e) => handleChange(e, id)}
                        />
                        <span onClick={(e) => handleChange(e, id)}>{item.name}</span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
      </div>
    </div>
  );
};

export default Dropdown;