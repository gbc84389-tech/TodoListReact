import { createContext } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

export const TarefaContext = createContext({})

export default function TarefaProvider({ children }) {
    const [tarefa, setTarefa] = useLocalStorage("Tarefas", [])

    return (
        <TarefaContext.Provider value = {{ tarefa, setTarefa }}>
            {children}
        </TarefaContext.Provider>
    )
}