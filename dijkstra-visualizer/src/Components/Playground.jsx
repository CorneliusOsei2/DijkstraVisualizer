import { useState } from "react";
import Node from './Node.jsx'

import '../Styles/Playground.css'

const gridHandler = () => {
    let resNodes = []

    for (let r = 0; r <= 20; r++){
        let currentRow = [];

        for (let c=0; c<= 50; c++){
            currentRow.push([])
        }
        resNodes.push(currentRow);
    }
    return resNodes;
}

const Playground = () => {

    const [nodes, setNodes] = useState([]);
    
    const createGrid = () => {
        let resNodes = gridHandler();
        setNodes(resNodes);
    }

    return (
        <div className="grid">
            <button onClick={createGrid}>Click</button>
            {console.log(nodes)}
            {nodes.map((row, key) => {
                return <div>
                            {row.map((node, key) => <Node></Node>)}
                        </div>;
            })}
        </div>
    )
}

export default Playground;