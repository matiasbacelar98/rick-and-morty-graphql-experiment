import Skeleton from './Skeleton';

export default function CharacterListSkeleton() {
  return (
    <section className='flex flex-col gap-y-4 sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-6'>
      {Array.from([1, 2, 3, 4, 5, 6, 7, 8], item => (
        <Skeleton height={430} key={item} />
      ))}
    </section>
  );
}
