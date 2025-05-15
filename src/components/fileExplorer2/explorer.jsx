import { useState } from "react";

const dir = [
  {
    id: "1",
    name: "Root",
    isFolder: true,
    children: [
      {
        id: "2",
        name: "Folder 1",
        isFolder: true,
        children: [
          {
            id: "3",
            name: "File 1",
            isFolder: false,
          },
          {
            id: "4",
            name: "File 2",
            isFolder: false,
          },
        ],
      },
      {
        id: "5",
        name: "Folder 2",
        isFolder: true,
        children: [
          {
            id: "5",
            name: "File 3",
            isFolder: false,
          },
        ],
      },
    ],
  },
];

const addFileToFolder = (tree, folderId, file) => {
  console.log("called add");
  return tree.map((node) => {
    if (node.id === folderId) {
      return {
        ...node,
        children: [...node.children, file],
      };
    } else if (node.children) {
      return {
        ...node,
        children: addFileToFolder(node.children, folderId, file),
      };
    }
    return node;
  });
};

const Component = ({ el }) => <h2>{el.name}</h2>;

const CallComponent = ({ el, setData }) => {
  const handleCreate = () => {
    // console.log(";;;;;");
    const newFile = { id: Math.random(), name: "dummy", isFolder: false };
    setData((prev) => addFileToFolder(prev, el.id, newFile));
  };
  if (!el.isFolder) {
    console.log(el);
    return <Component el={el} key={el.id} />;
  } else {
    console.log(el);
    return (
      <div key={el.id}>
        <div style={{ display: "flex" }}>
          <h1>{el.name}</h1>
          <button
            onClick={() => handleCreate()}
            style={{ height: "40px", marginLeft: "10px", marginTop: "15px" }}
          >
            Create
          </button>
        </div>
        <div style={{ marginLeft: "20px" }}>
          {el.children.map((item) => (
            <CallComponent el={item} key={el.id} setData={setData} />
          ))}
        </div>
      </div>
    );
  }
};

const Explorer = () => {
  const [data, setData] = useState(dir);

  return (
    <div>
      {data.map((el) => {
        console.log(el);
        return <CallComponent el={el} setData={setData} />;
      })}
    </div>
  );
};

export default Explorer;
