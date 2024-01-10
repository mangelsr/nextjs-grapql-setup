import { getClient } from '@/lib/client'
import { gql } from '@apollo/client'

async function loadData() {
  const { data } = await getClient().query({
    query: gql`
      query {
        characters(page: 1) {
          results {
            id
            name
            image
          }
        }
      }
    `
  })
  return data.characters.results
}

async function HomePage() {
  const characters = await loadData()
  return (
    <div>
      <h1>Characters...</h1>
      {
        characters.map(character => (
          <div key={character.id}>
            Name: {character.name}
            <img src={character.image} alt={character.name} />
          </div>
        ))
      }
    </div>
  )
}

export default HomePage
