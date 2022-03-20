
import '../Styles/Welcome.css'

function Welcome({ nodes, createGrid, numColsHandler, numRowsHandler }) {

    return (
        <div id={nodes.length !== 0 ? `hide` : `begin`} className='welcome'>

            <div>

                <h1>Welcome to Visualize Dijkstra</h1>
            </div>

            <form>
                <label htmlFor="num-rows">Number of Grid Rows</label>
                <input type="range" min="4" max="15" onChange={(e) => (numRowsHandler(e))}/>

                <hr />

                <label htmlFor="num-cols">Number of Grid Columns</label>
                <input type="range" min="4" max="15" onChange={(e) => (numColsHandler(e))} />
            </form>

            <button onClick={createGrid}>Create Grid</button>
        </div>
    )
}

export default Welcome;