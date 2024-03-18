const Buscador = ({ search, setSearch }) => {
  return (
    <>
      <form class='d-flex' role='search'>
        <input
          class='form-control me-2'
          type='search'
          placeholder='Buscar Colaborador'
          aria-label='Search'
        />
        <button class='btn btn-outline-success' type='submit'>Buscar</button>
      </form>
    </>
  )
}

export default Buscador
