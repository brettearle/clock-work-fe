import { useEffect } from 'react'
import { useState } from 'react'
import CharacterList from './CharacterList'
import CharacterDisplay from './CharacterDisplay'

function CharacterTab () {
  const [characters, setCharacters] = useState([])
  const [currentSelectedCharacter, setCurrentSelectedCharacter] = useState()

  const getCharacters = async () => {
    const response = await fetch(
      'https://clock-work-api.herokuapp.com/characters'
    )
    console.log(response)
    const data = await response.json()
    console.log(data.results)
    setCharacters(data.results)
  }

  function handleLIClick (charObj) {
    setCurrentSelectedCharacter(charObj)
  }

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <section className='characterTab'>
      <CharacterList onClick={handleLIClick} charactersList={characters} />
      <CharacterDisplay current={currentSelectedCharacter} />
    </section>
  )
}

export default CharacterTab
