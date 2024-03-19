import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { BaseColaboradores } from './BaseColaboradores'
import Listado from './components/Listado'
import Formulario from './components/Formulario'
import Alert from './components/Alert'
import Buscador from './components/Buscador'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [alert, setAlert] = useState({ mensaje: '', color: '' })
  const [search, setSearch] = useState('')

  const filtrados = colaboradores.filter((colaborador) => {
    if (
      colaborador.nombre.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.correo.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.edad.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.cargo.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.telefono.toLowerCase().includes(search.toLowerCase())
    ) {
       return colaborador
    }
  })

  return (
    <>
      <Container>
        <h1 className='my-4'> Lista de Colaboradores </h1>
        <Row>
          <Col className='mb-4' md={6}>
            <Buscador search={search} setSearch={setSearch} />
          </Col>
        </Row>
        <Row>
          <Col md={9}>
            <Listado colaboradores={filtrados} />
          </Col>
          <Col md={3}>
            <Formulario
            colaboradores={colaboradores}
            setColaboradores={setColaboradores}
            setAlert={setAlert}
            />
            {alert.mensaje !== '' && <Alert mensaje={alert.mensaje} color={alert.color} />}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
