"use client";

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const query = gql`
  query {
    characters(page: 1) {
      results {
        id
        name
        image
      }
    }
  }
`;

function ClientPage() {
  const { data } = useSuspenseQuery(query);
  console.log(data.characters.results);
  return (
    <div className="grid grid-cols-4">
      {data.characters.results.map((character) => (
        <div key={character.id}>
          <h3>{character.name}</h3>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </div>
  );
}

export default ClientPage;
