import { useContext, useState } from "react"
import { TarefaContext } from "../Context/TarefaContext"
import styles from './InputTarefa.module.css'

export default function InputTarefa() {
    const [task, setTask] = useState("")
    // Cria o context tarefa/setTarefa
    const { setTarefa } = useContext(TarefaContext)

    function addTarefa(e) {
        e.preventDefault()
        const taskFalsa = {
            texto: task,
            concluida: false
        }

        if (task.trim() != "") {
            setTarefa((prev) => [...prev, taskFalsa])

            setTask("")
        } else {
            alert("Tarefa nao pode estar vazia")
        }

    }

    return (
        <form onSubmit={addTarefa}>
            <label>Entre com a tarefa</label>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className = {styles.inputContainer}
            />
            <button type="submit" className = {styles.buttonAdd}>Adicionar</button>
        </form>
    )

}