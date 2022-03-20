import { useState } from "react";

// Components
import Node from './Node.jsx'
import Welcome from "./Welcome.jsx";

// Scripts
import { gridHandler } from "../Scripts/GridNode.js"
import { shortestPathAlgorithm } from "../Scripts/Dijkstra.js";
import {animateGrid} from "../Scripts/Animations.js"
import {wallNodeHandler} from "../Scripts/MouseEvents"

// Styless
import '../Styles/Playground.css'


const Playground = () => {
    const [nodes, setNodes] = useState([]);
    const [createWall, setCreateWall] = useState(false)
    const [welcome, setWelcome] = useState(true)
    const [numRows, setNumRows] = useState(15);
    const [numCols, setNumCols] = useState(40);
    const [startRow, setStartRow] = useState(2)
    const [startCol, setStartCol] = useState(2)
    const [endRow, setEndRow] = useState(15)
    const [endCol, setEndCol] = useState(15)

    // Create grid by changing state of nodes
    const createGrid = () => {
        let resNodes = gridHandler(numRows, numCols, startRow, startCol, endCol, endRow);
        setNodes(resNodes);
    }

    /** Set number of grid rows */
    const numRowsHandler = (e) => {
        setNumRows(e.target.value)
    }

    /** Set number of grid col */ 
    const numColsHandler = (e) => {
        setNumCols(e.target.value)
    }

    /** Get all paths leading to the End node */
    const getPath = () => {
        const start = nodes[startRow][startCol]; start.isStart = true;
        const end = nodes[endRow][endCol]; end.isEnd = true;
        console.log(start, end);
        const path = shortestPathAlgorithm(start, end, nodes)
        animateGrid(path);
    }

    /**
     * Handle mouse event listeners for drawing the walls 
     */
    const onMouseDownHandler = (row, col) => {
        setCreateWall(!createWall);
        wallNodeHandler(nodes[row][col]);
    }

    const onMouseEnterHandler = (row, col) => {
        if (createWall){
            wallNodeHandler(nodes[row][col]);
        }
    }

    const onMouseUpHandler = (row, col) => {
        setCreateWall(false);
        wallNodeHandler(nodes[row][col]);
    }

    return (
        <div className="playground">

            <button id={nodes.length === 0 ? `hide`: `begin`} onClick={getPath}>Click</button>

            {welcome ? <Welcome numRowsHandler = {numRowsHandler} numColsHandler = {numColsHandler} createGrid={createGrid} nodes={nodes}></Welcome> : null}

            <div className="grid">
                {nodes.map((row, rowId) => {
                    return <div>
                                {row.map((node, nodeId) => {
                                    const {row, col, isStart, isEnd, wall} = node;
                                    return <Node id={nodeId} row={row} col={col} isStart={isStart} isEnd={isEnd} wall={wall} onMouseDown={() => onMouseDownHandler(row, col)} onMouseEnter={() => onMouseEnterHandler
                                (row, col)} onMouseUp={() => onMouseUpHandler(row, col)} ></Node>}
                                    )}
                            </div>;
                })}
            </div>
            
        </div>
    )
}

export default Playground;