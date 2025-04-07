import React, { useState, useEffect, useRef } from "react";
import "./albumstyles.css";
import Modal from "./Modal";

const URL = "https://jsonplaceholder.typicode.com/photos";

const Album = () => {
  const [val, setVal] = useState({});
  const [album, setAlbum] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModalRef = useRef(null); 
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        const grouped = json.reduce((acc, item) => {
          if (!acc[item.albumId]) acc[item.albumId] = [];
          acc[item.albumId].push(item);
          return acc;
        }, {});
        setVal(grouped);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="App">
      <h1>Albums</h1>
      {/* {console.log(val)} */}
      <ul className="list">
        {Object.keys(val)?.map((albumId) => {
          return (
            <li
            onClick={(e) => {
                e.stopPropagation()
                if (openModalRef.current === albumId) {
                    // Close the modal
                    openModalRef.current = null;
                    setAlbum(null);
                    setIsModalOpen(false);
                  } else {
                    // Open the selected album modal
                    openModalRef.current = albumId;
                    setAlbum(albumId);
                    setIsModalOpen(true);
                  }
              }}
              ref={(albumId) => openModalRef.current = albumId}
              key={albumId}
              className="item"
            >
              Album: {albumId}
              <div className="modalbox">
              {openModalRef.current === albumId && <button style={{marginTop:"50px"}} onClick={(e) => {
                return(
                    openModalRef.current = null,
                    e.stopPropagation(),
                    setIsModalOpen(false)
                )
                }}>Close</button>}
              {openModalRef.current === albumId && <Modal  albumId={albumId} val={val} />}

              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Album;
