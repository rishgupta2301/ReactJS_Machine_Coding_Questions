import React from 'react'
import "./chechboxstyle.css"

const Checkboxes = ({directory, checked, setChecked}) => {

    const handleChange = (isChecked, node) => {
        setChecked((prev) => {
            const newState = {...prev, [node.id]:isChecked};

            const updateChildren = (node) => {
                 node.children?.forEach((child) => {
                    newState[child.id]=isChecked;
                    child.children && updateChildren(child); // recursive code if there are further children of current child
                });
            }
            updateChildren(node);
            

            // if all the children are checked then mark the parent also as checked
            const verifyChecked = (node) => {
                if(!node.children ) return newState[node.id] || false;

                const allChildrenChecked = node.children.every((child) => 
                    verifyChecked(child)
                );
                newState[node.id] = allChildrenChecked;
                return allChildrenChecked;
            }
            directory.forEach((node) => verifyChecked(node));
            return newState;
        });
    };
    return (
    <div>
         {directory.map((node) => {
            return (
            <div className='parent' key={node.id} >
                <input type='checkbox' checked={checked[node.id] || false} 
                onChange={(e) => handleChange(e.target.checked, node)} 
                />
                <span>{node.name}</span>
                {node.children && <Checkboxes directory={node.children} checked={checked} setChecked={setChecked}/>}
            </div> 
            )
        })
    }
    </div>
)
}

export default Checkboxes