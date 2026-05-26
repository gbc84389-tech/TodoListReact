import { useContext } from "react"
import { TarefaContext } from "../Context/TarefaContext"
import styles from './MostrarTarefa.module.css'

export default function MostrarTarefa({ filtro }) {
    // Cria o context da tarefa/setTarefa
    const { tarefa, setTarefa } = useContext(TarefaContext)

    // Edita a tarefa
    function editarTarefa(index, tarefas) {
        const novoTexto = prompt(
            "Entre com a edicao",
            tarefas.texto
        )

        const edicao = {
            texto: novoTexto,
            concluida: tarefas.concluida
        }

        const itensAtualizados = tarefa.map((tarefas, i) => {
            if (i === index && edicao.texto.trim() != "") {
                return edicao
            } else {
                return tarefas
            }
        })
        setTarefa(itensAtualizados)
    }
    // Exclui a tarefa
    function excluirTarefa(index) {
        const itensAtualizados = tarefa.filter((item, i) => i !== index)
        setTarefa(itensAtualizados)
    }
    // Inverte o checkBox
    function inverterCheckBox(tarefas) {
        const check = {
            texto: tarefas.texto,
            concluida: !tarefas.concluida
        }

        const itensAtualizados = tarefa.map((item, i) => {
            if (item === tarefas) {
                return check
            } else {
                return item
            }
        })

        setTarefa(itensAtualizados)
    }

    const itensFiltrados = tarefa.filter((item, i) => {
        if (filtro === "todas") {
            return item
        } else if (filtro === "concluidas") {
            return item.concluida
        } else {
            return !item.concluida
        }
    })

    return (
        <ul>
            {itensFiltrados.map((tarefas, index) => (
                <li key={index}>
                    <span className={styles.spanNumero}>{index + 1}</span>

                    <input type="checkbox"
                        onChange={() => inverterCheckBox(tarefas)}
                        checked={tarefas.concluida}
                        className={styles.inputTarefa} />

                    <span className = {styles.spanTarefa}>{tarefas.texto}</span>

                    <button onClick={() => editarTarefa(index, tarefas)}
                        className={styles.buttonEditarTarefa}
                    >Editar</button>
                    
                    <button onClick={() => excluirTarefa(index)}
                        className={styles.buttonExcluirTarefa}
                    >X</button>
                </li>
            ))}
        </ul>
    )
}