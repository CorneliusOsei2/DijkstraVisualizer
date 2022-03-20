import {START_NODE_COL, START_NODE_ROW, END_NODE_COL, END_NODE_ROW} from "./Constants"



const gridHandler = (numRows, numCols, startRow, startCol, endCol, endRow) => {
    let resNodes = []

    for (let row = 0; row <= numRows; row++){
        let currentRow = [];

        for (let col=0; col<= numCols; col++){
            currentRow.push(nodeHandler(row, col, startRow, startCol, endCol, endRow))
        }
        resNodes.push(currentRow);
    }
    return resNodes;
}

// Create Node-Object-Template and Set Properties
const nodeHandler = (row, col, startRow, startCol, endCol, endRow) => {
    const node = {
        row,
        col,
        isStart: row  === startRow && col === startCol ? true : false,
        isEnd:  row  === endRow && col === endCol ? true : false,
        wall: false,
        distance: Infinity,
        previous: null,
        visited: false

    }
    return node;
}

export {gridHandler}