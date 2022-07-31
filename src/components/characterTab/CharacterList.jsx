function CharacterList ({ onClick, charactersList }) {
  const listItems = charactersList.map(charObj => {
    return (
      <li key={charObj._id}>
        <button onClick={() => onClick(charObj)}>
          {charObj.firstName}
          {charObj._id}
        </button>
      </li>
    )
  })

  return (
    <section className='characterListContainer'>
      <h1>Characters</h1>
      <ul className='characterList'>
        {listItems !== undefined ? listItems : <li key='noitems'>No items</li>}
      </ul>
    </section>
  )
}

export default CharacterList

//https://clock-work-api.herokuapp.com/characters
