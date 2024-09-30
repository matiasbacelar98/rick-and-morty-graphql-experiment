import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_ALL_CHARACTERS } from '../api';

import Container from './Container';
import CharacterList from './CharacterList';
import CharacterSearch from './CharacterSearch';
import CharacterStatus from './CharacterStatus';

export default function CharacterPage() {
  const [status, setStatus] = useCharacterStatus();
  const [search, setSearch] = useCharacterSearch();

  const { data } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page: 1, status: '' },
  });

  return (
    <Container>
      <div className='flex flex-col gap-y-10 mb-10'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-6 sm:gap-x-4 mt-10'>
          <CharacterSearch
            value={search}
            onSearch={value => setSearch(value)}
          />
          <CharacterStatus
            value={status}
            onChange={value => setStatus(value)}
          />
        </div>

        <CharacterList characters={data?.characters?.results || []} />
      </div>
    </Container>
  );
}

// ToDo =>
function useCharacterSearch(): [
  string,
  React.Dispatch<React.SetStateAction<string>>
] {
  const [search, setSearch] = React.useState<string>('');
  return [search, setSearch];
}

// ToDo =>
function useCharacterStatus(): [
  string,
  React.Dispatch<React.SetStateAction<string>>
] {
  const [status, setStatus] = React.useState<string>('');
  return [status, setStatus];
}
