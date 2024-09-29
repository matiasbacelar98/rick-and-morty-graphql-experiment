import React from 'react';

import Container from './Container';
import CharacterList from './CharacterList';
import CharacterSearch from './CharacterSearch';
import CharacterStatus from './CharacterStatus';

const dummyCharacters = [
  {
    id: '1',
    name: 'Rick Sanchez',
    status: 'Alive',
    imgSrc: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    species: 'Human',
    origin: 'Earth (C-137)',
  },
  {
    id: '2',
    name: 'Morty Smith',
    status: 'Alive',
    imgSrc: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    species: 'Human',
    origin: 'unknown',
  },
  {
    id: '3',
    name: 'Summer Smith',
    status: 'Alive',
    imgSrc: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    species: 'Human',
    origin: 'Earth (Replacement Dimension)',
  },
  {
    id: '4',
    name: 'Beth Smith',
    status: 'Alive',
    imgSrc: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
    species: 'Human',
    origin: 'Earth (Replacement Dimension)',
  },
  {
    id: '5',
    name: 'Jerry Smith',
    status: 'Alive',
    imgSrc: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
    species: 'Human',
    origin: 'Earth (Replacement Dimension)',
  },
  {
    id: '6',
    name: 'Abadango Cluster Princess',
    status: 'Alive',
    imgSrc: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
    species: 'Alien',
    origin: 'Abadango',
  },
];

export default function CharacterPage() {
  const [value, setValue] = React.useState('');

  return (
    <Container>
      <div className='flex flex-col gap-y-10'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-6 sm:gap-x-4 mt-10'>
          <CharacterSearch value={value} onSearch={value => setValue(value)} />
          <CharacterStatus />
        </div>

        <CharacterList characters={dummyCharacters} />
      </div>
    </Container>
  );
}
