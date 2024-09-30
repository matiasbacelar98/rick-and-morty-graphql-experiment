import React from 'react';
import { useQuery } from '@apollo/client';
import { InView } from 'react-intersection-observer';

import { GET_ALL_CHARACTERS } from '../api';

import Container from './Container';
import Show from './Show';
import CharacterList from './CharacterList';
import CharacterSearch from './CharacterSearch';
import CharacterStatus from './CharacterStatus';
import CharacterListSkeleton from './CharacterListSkeleton';

export default function CharacterPage() {
  const [status, setStatus] = useCharacterStatus();
  const [search, setSearch] = useCharacterSearch();

  const { data, loading, error } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page: 1, status: '' },
  });

  if (error) throw new Error();

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

        <Show when={!loading} fallback={<CharacterListSkeleton />}>
          <CharacterList characters={data?.characters?.results || []} />
        </Show>

        <Show when={data?.characters?.results} fallback={null}>
          <InView
            as='div'
            onChange={inView => {
              if (inView) {
                console.log('Fire fetchMore - Infinite Scrolling');
              }
            }}
          />
        </Show>
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
