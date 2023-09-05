import { useState } from "react"


function TodoForm( {addTodo} ) {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value || !category) return;
        addTodo(value, category)
        setValue("")
        setCategory("")
    }


  return (
    <div className='todo-form'>
        <h2>Criar Tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setValue(e.target.value)} placeholder='Digite o título' value={value} type="text" />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>Selecione a categoria</option>
                <option value='trabalho'>Trabalho</option>
                <option value='estudos'>Estudos</option>
                <option value='pessoal'>Pessoal</option>
            </select>
            <button type='submit'>Criar tarefa</button>
        </form>

    </div>
  )
}

export default TodoForm