
function Filter( { filter, setFilter, setSort } ) {
  return (
    <div className="filter">
        <h2>Filtro</h2>
        <div className="filter-options">
            <p>Status:</p>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value='All'>Todas</option>
                <option value="Completed">Completas</option>
                <option value="incomplete">Incompletas</option>
            </select>
            </div>
            <div>
                <p>Ordem alfabética:</p>
                <button onClick={() => setSort("Asc")}>Asc</button>
                <button onClick={() => setSort("Des")}>Des</button>
            </div>
        </div>
   
  )
}

export default Filter