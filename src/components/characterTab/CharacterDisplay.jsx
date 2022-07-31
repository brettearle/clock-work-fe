function CharacterDisplay ({ current }) {
  console.log(current)

  return (
    <section className='characterDisplayContainer'>
      {current !== undefined ? (
        <h1>{current.firstName}</h1>
      ) : (
        <h1>Select a Character</h1>
      )}
    </section>
  )
}

export default CharacterDisplay
