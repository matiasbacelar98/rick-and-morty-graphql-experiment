import Container from './Container';
import CharacterList from './CharacterList';

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
  return (
    <Container>
      <CharacterList characters={dummyCharacters} />
    </Container>
  );
}
