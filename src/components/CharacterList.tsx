import { CharacterType } from '../types';
import Character from './Character';

type Props = {
  characters: CharacterType[];
};

export default function CharacterList({ characters }: Props) {
  return (
    <section className='flex flex-col gap-y-4 sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-6'>
      {characters.map(character => (
        <Character
          key={character.id}
          species={character.species}
          imgSrc={character.imgSrc}
          status={character.status}
          origin={character.origin}
          name={character.name}
        />
      ))}
    </section>
  );
}
