import { useState } from "react";
import Node from './Node.jsx'

import '../Styles/Playground.css'

// Creates nested lists to be used for grid
const gridHandler = () => {
    let resNodes = []

    for (let row = 0; row <= 20; row++){
        let currentRow = [];

        for (let col=0; col<= 50; col++){
            const node = {
                row,
                col,
                isStart: row === 5 && col === 5,
                isEnd: row === 5 && col === 26
            }
            currentRow.push(node)
        }
        resNodes.push(currentRow);
    }
    return resNodes;
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