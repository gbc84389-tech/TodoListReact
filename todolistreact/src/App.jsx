import './App.css'
import { useState, useContext } from 'react'
import InputTarefa from './Components/InputTarefa'
import MostrarTarefa from './Components/MostrarTarefa'
import TarefaProvider from './Context/TarefaContext'
import { TarefaContext } from './Context/TarefaContext'

function App() {
  return (
    <TarefaProvider>
      <AppContent />
    </TarefaProvider>
  )
}

function AppContent() {
  const [filtro, setFiltro] = useState("todas")
  const { tarefa } = useContext(TarefaContext)

  function trocarFiltro() {
    if (filtro === "todas") {
      setFiltro("concluidas")
    } else if (filtro === "concluidas") {
      setFiltro("pendentes")
    } else {
      setFiltro("todas")
    }
  }

  return (
    <div className='mainContainer'>
      <div className='inputContainer'>
        <InputTarefa />
      </div >

      <div className='filtroContainer'>
        <button onClick={trocarFiltro}
          className='filtroButton'
        >
          Filtro: {filtro}
        </button>
      </div>

      <div className={tarefa.length ? 'mostrarContainer' : ''}>
        <MostrarTarefa filtro={filtro} />
      </div>
    </div>
  )
}

export default App
