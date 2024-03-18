import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Formulario = ({ colaboradores, setColaboradores, setAlert }) => {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: ''
  })

  const handleChange = (event) => setNuevoColaborador({ ...nuevoColaborador, [event.target.name]: event.target.value })

  const handleSend = (event) => {
    event.preventDefault()
    const colaboradorId = { ...nuevoColaborador, id: uuidv4() }
    setColaboradores([...colaboradores, colaboradorId])

    if (colaboradorId.nombre === '' || colaboradorId.correo === '' || colaboradorId.edad === '' || colaboradorId.cargo === '' || colaboradorId.telefono === '') {
      setAlert({ mensaje: 'Debe llenar los campos vacíos', color: 'warning' })
    } else {
      setAlert({ mensaje: 'Colaborador guardado con exito!!', color: 'success' })
    }

    setNuevoColaborador({
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: ''
    })
  }

  return (
    <>
      <h2>Agregar Colaborador</h2>
      <Form onSubmit={handleSend}>
        <Form.Group className='mb-3' controlId='formBasicNombre'>
          <Form.Control
            type='text'
            name='nombre'
            placeholder='Nombre del colaborador'
            onChange={handleChange}
            value={nuevoColaborador.nombre}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control
            type='email'
            name='correo'
            placeholder='Email del colaborador'
            onChange={handleChange}
            value={nuevoColaborador.correo}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEdad'>
          <Form.Control
            type='text'
            name='edad'
            placeholder='Edad del colaborador'
            onChange={handleChange}
            value={nuevoColaborador.edad}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicCargo'>
          <Form.Control
            type='text'
            name='cargo'
            placeholder='Cargo del colaborador'
            onChange={handleChange}
            value={nuevoColaborador.cargo}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicTelefono'>
          <Form.Control
            type='text'
            name='telefono'
            placeholder='Telefono del colaborador'
            onChange={handleChange}
            value={nuevoColaborador.telefono}
          />
        </Form.Group>

        <Button variant='outline-primary' type='submit'>
          Enviar
        </Button>
      </Form>
    </>
  )
}

export default Formulario
