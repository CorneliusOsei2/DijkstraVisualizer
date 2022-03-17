import { useState } from "react";
import Node from './Node.jsx'

const Playground = () => {

    const [nodes, setNodes] = useState([]);

    const gridHandler = () => {
        
        let resNodes = []

        for (let r = 0; r <= 15; r++){
            let currentRow = [];

            for (let c=0; c<= 50; c++){
                currentRow.push([])
            }

            resNodes.push(currentRow);
        }

        setNodes(resNodes);
    }
    gridHandler();
    return (
        <div className="grid">
            {nodes.map((row) => {
                return <div>
                            {row.map((node) => <Node></Node>)}
                        </div>;
            })}
        </div>
    )
}

export default Playground;