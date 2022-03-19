import '../Styles/Node.css'

const Node = ({row, col, wall, isStart, isEnd, onMouseDown, onMouseEnter, onMouseUp}) => {
    const identity = isEnd ? 'end' : isStart ? 'start' : wall ? 'wall' : '';

    return (
        <div id={`node-${row}-${col}`} className={`node ${identity}`} onMouseDown={onMouseDown} onMouseEnter={onMouseEnter} onMouseUp={onMouseUp}></div>
    );
}

export default Node;