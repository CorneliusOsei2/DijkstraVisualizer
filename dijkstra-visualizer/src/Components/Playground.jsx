import { useState } from "react";
import Node from './Node.jsx'

import '../Styles/Playground.css'

import {START_NODE_COL, START_NODE_ROW, END_NODE_COL, END_NODE_ROW, ROWS, COLS} from '../Scripts/Constants'
import { shortestPathAlgorithm } from "../Scripts/Dijkstra.js";

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



const Playground = () => {
    const [nodes, setNodes] = useState([]);
    const [createWall, setCreateWall] = useState(false)

    // Create grid by changing state of nodes
    const createGrid = () => {
        let resNodes = gridHandler();
        setNodes(resNodes);
    }

    /**
     * Get all paths leading to the End node
     */
    const getPath = () => {
        const start = nodes[START_NODE_ROW][START_NODE_COL];
        const end = nodes[END_NODE_ROW][END_NODE_COL];
        const path = shortestPathAlgorithm(start, end, nodes)
        animateGrid(path);

    }

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

    /**
     * Handle mouse event listeners for drawing the walls 
     */
    const handleOnMouseDown = (row, col) => {
        setCreateWall(!createWall);
        wallNodeHandler(nodes[row][col]);
    }

    const handleOnMouseEnter = (row, col) => {
        if (createWall){
            wallNodeHandler(nodes[row][col]);
        }
    }

    const handleOnMouseUp = (row, col) => {
        wallNodeHandler(nodes[row][col]);
        setCreateWall(false);
    }
    const wallNodeHandler = (node) => {
        node.wall = true;
        if (node.wall){
            const nodeDiv = document.getElementById(`node-${node.row}-${node.col}`)
            nodeDiv.className = 'node wall';
        }
       
    }

    return (
        <div className="grid">
            <button id={nodes.length !== 0 ? `hide`: `begin`} onClick={createGrid}>Click</button>

            <button id={nodes.length === 0 ? `hide`: `begin`} onClick={getPath}>Click</button>

            
            
            {nodes.map((row, rowId) => {
                return <div>
                            {row.map((node, nodeId) => {
                                const {row, col, isStart, isEnd, wall} = node;
                                return <Node id={nodeId} row={row} col={col} isStart={isStart} isEnd={isEnd} wall={wall} onMouseDown={() => handleOnMouseDown(row, col)} onMouseEnter={() => handleOnMouseEnter(row, col)} onMouseUp={() => handleOnMouseUp(row, col)} ></Node>}
                                )}
                        </div>;
            })}
        </div>
    )
}

export default Playground;