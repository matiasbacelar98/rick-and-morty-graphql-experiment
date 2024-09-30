import { CharacterType } from '../types';

export default function Character({
  name,
  species,
  status,
  origin,
  image,
}: CharacterType) {
  return (
    <article className='shadow-md rounded overflow-hidden max-w-96'>
      <img
        src={image}
        alt='character'
        className='object-cover object-center h-64 w-96'
      />

      <div className='flex flex-col p-5 gap-y-5'>
        <h2 className='text-lg font-semibold'>{name}</h2>

        <ul className='flex flex-col gap-y-2'>
          <li className='flex items-center justify-between gap-x-2'>
            <p className='font-semibold'>Species:</p>
            <p className='truncate'>{species}</p>
          </li>

          <li className='flex items-center justify-between gap-x-2'>
            <p className='font-semibold'>Status</p>
            <p>{status}</p>
          </li>

          <li className='flex items-center justify-between gap-x-2'>
            <p className='font-semibold'>Origin:</p>
            <p className='truncate'>{origin?.name || ''}</p>
          </li>
        </ul>
      </div>
    </article>
  );
}
