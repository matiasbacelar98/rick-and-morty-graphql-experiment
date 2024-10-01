import React from 'react';

import {
  ApolloQueryResult,
  OperationVariables,
  useQuery,
} from '@apollo/client';
import { InView } from 'react-intersection-observer';
import { InfinitySpin } from 'react-loader-spinner';

import { GET_ALL_CHARACTERS } from '../api';
import { useDebounce } from '../hooks';

import Container from './Container';
import Show from './Show';
import CharacterList from './CharacterList';
import CharacterSearch from './CharacterSearch';
import CharacterStatus from './CharacterStatus';
import CharacterListSkeleton from './CharacterListSkeleton';

export default function CharacterPage() {
  const { data, loading, error, fetchMore, refetch } = useQuery(
    GET_ALL_CHARACTERS,
    {
      variables: { page: 1, status: '', name: '' },
    }
  );

  const { status, setStatus, search, setSearch } =
    useCharactersFilters(refetch);

  const [scrollLoading, setScrollLoading] = React.useState<boolean>(true);

  if (error) throw new Error('Something went wrong!!!');

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
              const nextPage = data?.characters?.info?.next;

              if (inView && nextPage) {
                setScrollLoading(true);

                fetchMore({
                  variables: { page: nextPage, status: status, name: search },
                  updateQuery: (previousResult, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return previousResult;

                    const newResultsObject = {
                      characters: {
                        ...fetchMoreResult.characters,
                        results: [
                          ...previousResult.characters.results,
                          ...fetchMoreResult.characters.results,
                        ],
                      },
                    };

                    return newResultsObject;
                  },
                }).then(result => {
                  setScrollLoading(result.loading);
                });
              }
            }}
          />
        </Show>

        <Show when={scrollLoading} fallback={null}>
          <div className='flex items-center justify-center scroll-spinner'>
            <InfinitySpin width='200' />
          </div>
        </Show>
      </div>
    </Container>
  );
}

function useCharactersFilters(
  refetchCharacters: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<unknown>>
) {
  const [status, setStatus] = React.useState<string>('');
  const [search, setSearch] = React.useState<string>('');

  const debouncedSearch = useDebounce(search);

  React.useEffect(() => {
    refetchCharacters({ page: 1, status: status, name: debouncedSearch });
  }, [status, refetchCharacters, debouncedSearch]);

  return { status, setStatus, search, setSearch };
}
