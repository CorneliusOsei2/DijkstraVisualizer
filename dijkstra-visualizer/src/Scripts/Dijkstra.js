


const shortestPathAlgorithm = (startNode, endNode, grid) => {

    if (startNode === endNode){
        return false;
    }

    const unvisited = getNodes(grid);
    const visited = [];
    startNode.distance = 0;

    while (!!unvisited.length){
        sortNodes(unvisited);
        const currNode = unvisited.shift();
        if (currNode.distance === Infinity) return visited;
        
        // If we meet a wall, we go around it and not visit it
        if(currNode.wall){ continue; }
        currNode.visited = true;
        visited.push(currNode)
        
        if (currNode === endNode) {return visited;}
        updateUnvisitedNeighbors(currNode, grid);

    }

}


const getNodes = (grid) => {
    const allNodes = [];

    for (let row of grid){
        for(let node of row){
            allNodes.push(node);
        }
    }
    return allNodes;
}

const sortNodes = (nodes) => {
    nodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

const getUnvisitedNeighbors = (node, grid) => {
    const neighbors = [] ;
    const {col, row} = node;

    if (row > 0)neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    return neighbors.filter(neighbor => !neighbor.isVisited);
}

const updateUnvisitedNeighbors = (node, grid) => {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
    for (const neighbor of unvisitedNeighbors) {
      neighbor.distance = node.distance + 1;
      neighbor.previousNode = node;
    }
  }


export {shortestPathAlgorithm};