


/**
 * Animate the grid by changing the color of the nodes
 * which are in the path
 */
const animateGrid = (path) => {
    for (let i = 0; i <= path.length; i++) {
        if (i === path.length) {
            setTimeout(() => {
            animateShortestPath();
            }, 10 * i);
            return;
        }
        setTimeout(() => {
            const node = path[i];
            const nodeDiv = document.getElementById(`node-${node.row}-${node.col}`)
            nodeDiv.className = 'node visited';
            console.log(nodeDiv)
        }, 10 * i);
        }
}

/**
 * Animate the actual shortest path
 */
const animateShortestPath = () => {
    
}

export {animateGrid, animateShortestPath}

