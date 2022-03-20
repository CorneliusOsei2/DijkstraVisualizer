

const wallNodeHandler = (node) => {
    node.wall = true;
    if (node.wall){
        const nodeDiv = document.getElementById(`node-${node.row}-${node.col}`)
        nodeDiv.className = 'node wall';
    }
}

export {wallNodeHandler}