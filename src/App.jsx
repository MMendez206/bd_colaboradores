import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { BaseColaboradores } from './BaseColaboradores'
import Listado from './components/Listado'

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  return (
    <>
      <h1>Lista de Colaboradores</h1>
      <Listado colaboradores={colaboradores} />
    </>
  )
}

export default App
