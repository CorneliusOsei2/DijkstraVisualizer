import '../Styles/Node.css'

const Node = ({row, col, isWall, isStart, isEnd, distance, prev}) => {
    const identity = isEnd ? 'end' : isStart ? 'start' : isWall ? 'wall' : '';

    return (
        <div id={`node-${row}-${col}`} className={`node node-${identity}`}></div>
    );
}

export default Node;