import { useState } from "react";

// Components
import Node from './Node.jsx'
import Welcome from "./Welcome.jsx";

// Scripts
import { gridHandler } from "../Scripts/GridNode.js"
import { shortestPathAlgorithm } from "../Scripts/Dijkstra.js";
import {animateGrid} from "../Scripts/Animations.js"

// Styless
import '../Styles/Playground.css'

// Constants
import {START_NODE_COL, START_NODE_ROW, END_NODE_COL, END_NODE_ROW} from '../Scripts/Constants'


const Playground = () => {
    const [nodes, setNodes] = useState([]);
    const [createWall, setCreateWall] = useState(false)
    const [welcome, setWelcome] = useState(true)
    const [numRows, setNumRows] = useState(15);
    const [numCols, setNumCols] = useState(40);

    // Create grid by changing state of nodes
    const createGrid = () => {
        let resNodes = gridHandler(numRows, numCols);
        setNodes(resNodes);
    }

    // Set number of grid rows
    const numRowsHandler = (e) => {
        setNumRows(e.target.value)
    }

    // Set number of grid cols
    const numColsHandler = (e) => {
        setNumCols(e.target.value)
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

            <button id={nodes.length === 0 ? `hide`: `begin`} onClick={getPath}>Click</button>

            {welcome ? <Welcome numRowsHandler = {numRowsHandler} numColsHandler = {numColsHandler} createGrid={createGrid} nodes={nodes}></Welcome> : null}

            
            
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