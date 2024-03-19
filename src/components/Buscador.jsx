const Buscador = ({ search, setSearch }) => {
  const handleChange = (event) => {
    const value = event.target.value
    setSearch(value)
  }
  return (
    <>
      <form className='d-flex' role='search'>
        <input
          className='form-control me-2'
          type='search'
          placeholder='Buscar Colaborador'
          aria-label='Search'
          value={search}
          onChange={handleChange}
        />
      </form>
    </>
  )
}

export default Buscador
