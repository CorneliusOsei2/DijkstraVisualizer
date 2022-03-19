import {START_NODE_COL, START_NODE_ROW, END_NODE_COL, END_NODE_ROW, ROWS, COLS} from './Constants'


// Creates nested lists to be used for grid
const gridHandler = () => {
    let resNodes = []

    for (let row = 0; row <= ROWS; row++){
        let currentRow = [];

        for (let col=0; col<= COLS; col++){
            currentRow.push(nodeHandler(row, col))
        }
        resNodes.push(currentRow);
    }
    return resNodes;
}

// Create Node-Object-Template and Set Properties
const nodeHandler = (row, col) => {
    const node = {
        row,
        col,
        isStart: row === START_NODE_ROW && col === START_NODE_COL,
        isEnd: row === END_NODE_ROW && col === END_NODE_COL,
        wall: false,
        distance: Infinity,
        previous: null,
        visited: false

    }
    return node;
}

module.exports = {gridHandler}