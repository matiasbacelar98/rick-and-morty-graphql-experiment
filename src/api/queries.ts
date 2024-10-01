import { gql } from '@apollo/client';

export const GET_ALL_CHARACTERS = gql`
  query GetCharacters($page: Int, $status: String, $name: String) {
    characters(page: $page, filter: { status: $status, name: $name }) {
      info {
        next
        prev
        count
      }
      results {
        id
        name
        status
        image
        species
        origin {
          name
        }
      }
    }
  }
`;
