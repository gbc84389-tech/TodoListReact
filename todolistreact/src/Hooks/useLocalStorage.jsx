import { useState, useEffect } from 'react'

export default function useLocalStorage(valor, valorInicial) {
    const [state, setState] = useState(() => {

            const salvo = localStorage.getItem(valor)

            const valorAtualizado = JSON.parse(salvo)

            return valorAtualizado || valorInicial
        })

        useEffect(() => {
            localStorage.setItem(valor, JSON.stringify(state))
        }, [state])

        return(
            [state,
            setState]
        )
}