import '../Styles/Node.css'

const Node = ({row, col, isWall, isStart, isEnd, }) => {
    const identity = isEnd ? 'node-end' : isStart ? 'node-start' : isWall ? 'node-wall' : '';

    return (
        <div id={`node-${row}-${col}`} className={`node node-${identity}`}></div>
    );
}

export default Node;