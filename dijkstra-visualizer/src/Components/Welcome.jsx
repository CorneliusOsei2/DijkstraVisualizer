
import '../Styles/Playground.css'

function Welcome({ nodes, createGrid, numColsHandler, numRowsHandler }) {

    return (
        <div id={nodes.length !== 0 ? `hide` : `begin`}>

            <div>

                <h1>Welcome to Visualize Dijkstra</h1>
            </div>

            <form>
                <label htmlFor="num-rows">Number of Grid Rows</label>
                <input id='num-rows' type="text" onChange={(e) => (numRowsHandler(e))} />

                <hr />

                <label htmlFor="num-cols">Number of Grid Columns</label>
                <input id='num-cols' type="text" onChange={(e) => (numColsHandler(e))} />
            </form>

            <button onClick={createGrid}>Create Grid</button>
        </div>
    )
}

export default Welcome;