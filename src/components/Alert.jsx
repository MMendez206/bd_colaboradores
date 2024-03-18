const Alert = ({ mensaje, color }) => {
  return (
    <>
      <div className={`alert alert-${color}`} role='alert'>
        {mensaje}
      </div>
    </>
  )
}

export default Alert
