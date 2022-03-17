

const Node = () => {
    const {row, col, isWall, isStart, isEnd, } = this.props;
    const identity = isEnd ? 'node-end' : isStart ? 'node-start' : isWall ? 'node-wall' : '';

    return (
        <div id={`node-${row}-${col}`} className={`node-${identity}`}></div>
    );
}