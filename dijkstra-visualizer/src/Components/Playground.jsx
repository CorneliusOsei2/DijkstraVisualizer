import { useState } from "react";
import Node from './Node.jsx'

import '../Styles/Playground.css'

import {START_NODE_COL, START_NODE_ROW, END_NODE_COL, END_NODE_ROW} from '../Scripts/Constants'

// Creates nested lists to be used for grid
const gridHandler = () => {
    let resNodes = []

    for (let row = 0; row <= 20; row++){
        let currentRow = [];

        for (let col=0; col<= 50; col++){
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

    }
    return node;
}

const startVisualization = () => {
    
}

const Playground = () => {
    const [nodes, setNodes] = useState([]);
    
    // Create grid by changing state of nodes
    const createGrid = () => {
        let resNodes = gridHandler();
        setNodes(resNodes);
    }

    return (
        <div className="grid">
            {console.log(nodes)}
            <button id={nodes.length !== 0 ? `hide`: `begin`} onClick={createGrid}>Click</button>

            <button id={nodes.length === 0 ? `hide`: `begin`} onClick={startVisualization}>Click</button>
            
            {nodes.map((row, rowId) => {
                return <div>
                            {row.map((node, nodeId) => {
                                const {isStart, isEnd} = node;
                                return <Node id={nodeId} isStart={isStart} isEnd={isEnd} isWall={false}></Node>}
                                )}
                        </div>;
            })}
        </div>
    )
}

export default Playground;