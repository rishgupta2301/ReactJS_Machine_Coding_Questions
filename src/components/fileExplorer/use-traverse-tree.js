const useTraverseTree = () => {
    function insertNode(tree, folderId, item, isFolder){
        // checking if the current folder id is equal to the tree id that is the edge case for starting and tree is a folder 
        if(tree.id === folderId && tree.isFolder){
            tree.items.unshift({ // unshift will add it to the very first unlike map which adds it to the last
                id: new Date().getTime(),
                name: item,
                isFolder,
                items:[],
            })
            return tree;
        }

        // case for other levels that is except the root
        let latestNode = [];
        latestNode = tree.items.map((obj) => {
            return insertNode(obj, folderId, item, isFolder);
        });
        return {...tree, items: latestNode};
    }

    return {insertNode};
}

export default useTraverseTree;